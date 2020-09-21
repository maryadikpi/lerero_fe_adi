const ChartTaskProgress = () => (
  <div className="col-lg-6">
    <div className="card">
      <div className="card-header border-0">
        <div className="d-flex justify-content-between">
          <h3 className="card-title">Task Progress</h3>
          <a href="">View Report</a>
        </div>
      </div>
      <div className="card-body">
        <div className="position-relative mb-4">
          <canvas id="visitors-chart" height="200"></canvas>
        </div>

        <div className="d-flex flex-row justify-content-end">
          <span className="mr-2">
            <i className="fas fa-square text-primary"></i> This Week
          </span>

          <span>
            <i className="fas fa-square text-gray"></i> Last Week
          </span>
        </div>
      </div>
    </div>
  </div>
);

export default ChartTaskProgress;
