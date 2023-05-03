package expo.modules.workshopcharts

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

class WorkshopChartsModule : Module() {
  override fun definition() = ModuleDefinition {
    Name("WorkshopCharts")

    View(WorkshopChartsView::class) {
      Prop("data") { view: WorkshopChartsView, prop: ArrayList<Series> ->
        view.setChartData(prop);
      }
    }
  }
}
