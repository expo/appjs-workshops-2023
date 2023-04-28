import React from 'react';
import {ScrollView} from 'react-native';
import PDFComponent from './components/capabilities/pdfs/PDFComponent';
import Step from './components/helpers/Step';
import Header from './components/helpers/Header';
import SkiaComponent from './components/capabilities/skia/SkiaComponent';
import StringsComponent from './components/capabilities/strings/StringsComponent';
import ClipboardComponent from './components/capabilities/clipboard/ClipboardComponent';
import NativeChartsComponent from './components/capabilities/charts/NativeChartsComponent';
import HealthKitComponent from './components/capabilities/healthkit/HealthKitComponent';

function App(): JSX.Element {
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <Header />
      <Step number={1} label="Rendering PDFs" component={PDFComponent} />
      <Step
        number={2}
        label="Showing fancy graphics"
        component={SkiaComponent}
      />
      <Step number={3} label="Health Kit" component={HealthKitComponent} />
      <Step number={4} label="Reading config" component={StringsComponent} />
      <Step number={5} label="Clipboard" component={ClipboardComponent} />
      <Step
        number={6}
        label="Native Charts"
        component={NativeChartsComponent}
      />
    </ScrollView>
  );
}

export default App;
