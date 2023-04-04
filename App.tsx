import React from 'react';
import {ScrollView} from 'react-native';
import PDFComponent from './components/capabilities/pdfs/PDFComponent';
import Step from './components/helpers/Step';
import Header from './components/helpers/Header';
import SkiaComponent from './components/capabilities/skia/SkiaComponent';

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
    </ScrollView>
  );
}

export default App;
