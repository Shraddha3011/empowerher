import { hash, compare } from 'bcryptjs';

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}

export interface Session {
  user: {
    id: string;
    name: string;
    email: string;
  };
}

class LocalAuthService {
  private static instance: LocalAuthService;
  private users: User[] = [];

  private constructor() {
    // Load users from localStorage on initialization
    if (typeof window !== 'undefined') {
      const storedUsers = localStorage.getItem('users');
      if (storedUsers) {
        this.users = JSON.parse(storedUsers);
      }
    }
  }

  public static getInstance(): LocalAuthService {
    if (!LocalAuthService.instance) {
      LocalAuthService.instance = new LocalAuthService();
    }
    return LocalAuthService.instance;
  }

  private saveUsers() {
    if (typeof window !== 'undefined') {
      localStorage.setItem('users', JSON.stringify(this.users));
    }
  }

  async register(name: string, email: string, password: string): Promise<User> {
    // Check if user already exists
    if (this.users.find(user => user.email === email)) {
      throw new Error('User already exists');
    }

    // Hash password
    const hashedPassword = await hash(password, 10);

    // Create new user
    const user: User = {
      id: Math.random().toString(36).substr(2, 9),
      name,
      email,
      password: hashedPassword,
    };

    // Add user to array and save to localStorage
    this.users.push(user);
    this.saveUsers();

    return user;
  }

  async login(email: string, password: string): Promise<Session> {
    const user = this.users.find(user => user.email === email);
    if (!user) {
      throw new Error('No user found');
    }

    const isValid = await compare(password, user.password);
    if (!isValid) {
      throw new Error('Invalid password');
    }

    return {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    };
  }

  async logout(): Promise<void> {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('session');
    }
  }

  async getSession(): Promise<Session | null> {
    if (typeof window !== 'undefined') {
      const session = localStorage.getItem('session');
      return session ? JSON.parse(session) : null;
    }
    return null;
  }

  setSession(session: Session): void {
    if (typeof window !== 'undefined') {
      localStorage.setItem('session', JSON.stringify(session));
    }
  }
}

export const authService = LocalAuthService.getInstance(); 