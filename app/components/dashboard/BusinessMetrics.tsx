interface MetricsProps {
  metrics: {
    monthlyRevenue: number;
    activeCustomers: number;
    pendingOrders: number;
  };
}

export function BusinessMetrics({ metrics }: MetricsProps) {
  return (
    <div className="bg-base-100 p-6 rounded-box shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Business Metrics</h2>
      <div className="grid grid-cols-3 gap-4">
        <div className="stat">
          <div className="stat-title">Revenue</div>
          <div className="stat-value">₹{metrics.monthlyRevenue.toLocaleString()}</div>
          <div className="stat-desc">Monthly</div>
        </div>
        <div className="stat">
          <div className="stat-title">Customers</div>
          <div className="stat-value">{metrics.activeCustomers}</div>
          <div className="stat-desc">Active</div>
        </div>
        <div className="stat">
          <div className="stat-title">Orders</div>
          <div className="stat-value">{metrics.pendingOrders}</div>
          <div className="stat-desc">Pending</div>
        </div>
      </div>
    </div>
  );
} 