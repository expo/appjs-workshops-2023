import ExpoModulesCore

public class WorkshopChartsModule: Module {
  public func definition() -> ModuleDefinition {
    Name("WorkshopCharts")

    View(WorkshopChartsView.self) {
      Prop("data") { (view: WorkshopChartsView, prop: [Series]) in
        view.setChartData(data: prop)
      }
    }
  }
}
