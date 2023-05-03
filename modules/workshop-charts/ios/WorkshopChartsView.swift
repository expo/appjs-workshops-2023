import ExpoModulesCore
import Charts

struct Series: Record {
  @Field
  var color: UIColor = UIColor.black

  @Field
  var percentage: Double = 0
}

class WorkshopChartsView: ExpoView {
  let chartView = PieChartView()

  required init(appContext: AppContext? = nil) {
    super.init(appContext: appContext)
    clipsToBounds = true
    addSubview(chartView)
  }

  override func layoutSubviews() {
    chartView.frame = bounds
  }
  
  func setChartData(data: [Series]) {
    let set1 = PieChartDataSet(entries: data.map({ (series: Series) -> PieChartDataEntry in
      return PieChartDataEntry(value: series.percentage)
    }))
    set1.colors = data.map({ (series: Series) -> UIColor in
      return series.color
    })
    let chartData: PieChartData = [set1]
    chartView.data = chartData
  }
}
