import { Component, createSignal } from 'solid-js';

import desktop from './assets/desktop.jpg';
import agGrid from './assets/ag-grid.png';
import select from './assets/select.png';
import table from './assets/table.png';
import javascript from './assets/javascript.png';
import styles from './App.module.css';

interface DemoOption {
  index: number;
  image: string;
  alt: string;
  style: string;
  reflStyle: string;
  reflHoverstyle: string;
}

const demoOptions: DemoOption[] = [
  {index: 1, image: select, alt: 'select', style: styles.option1, reflStyle: styles.option1Reflection, reflHoverstyle: styles.option1ReflectionHover},
  {index: 2, image: agGrid, alt: 'agGrid', style: styles.option2, reflStyle: styles.option2Reflection, reflHoverstyle: styles.option2ReflectionHover},
  {index: 3, image: table, alt: 'table', style: styles.option3, reflStyle: styles.option3Reflection, reflHoverstyle: styles.option3ReflectionHover},
  {index: 4, image: javascript, alt: 'javascript', style: styles.option4, reflStyle: styles.option4Reflection, reflHoverstyle: styles.option4ReflectionHover}
]
const App: Component = () => {
  const [optionText,setOptionText] = createSignal("");
  const [option,setOption] = createSignal(0);
  const [showOption,setShowOption] = createSignal(0);
  
  const selectOption = (opt: number) => {
    setOption(opt);
    switch(opt) {
      case 1:
        setOptionText("Functionally rich SolidJs Select control.");
        break;
      case 2:
        setOptionText("A powerful quick filter for React and Ag-Grid.");
        break;
      case 3:
        setOptionText("A virtualised container with customisable scrollbar.");
        break;
      case 4:
        setOptionText("A Code viewer for SolidJs.");
        break;
      default:
        setOptionText("Select one of the above options to view demos.")
        break;
    }
  }

  const nagivateToOption = (opt: number ) => {
    setShowOption(opt);
    setTimeout(() => {
      switch(opt) {
        case 1:
          window.location.href = "https://markgregg.github.io/solidjs-select/"; 
          break; 
        case 2:
          window.location.assign("https://markgregg.github.io/ag-grid-quick-filter/"); 
          break;
        case 3:
          window.location.assign("https://markgregg.github.io/solidjs-virtualisation/"); 
          break;
        case 4:
          window.location.assign("https://markgregg.github.io/solidjs-show-code/"); 
          break;
      }
    }, 900)
  }

  return (
    <div class={styles.frame}>
      <div class={styles.page}>
        <div class={styles.container}>
          <h1 class={styles.title}>Mark's Demo Page</h1>
          <img 
            class={styles.desktopImage}
            src={desktop}
            alt="main"
          />
          <div class={styles.reflection}>
            <img 
              src={desktop}
              alt="main-reflection"
            />
            <div class={styles.overlay}/>
          </div>
          {
            demoOptions.map( option => 
              <img 
                class={option.style}
                src={option.image}
                alt={option.alt}
                onClick={() => nagivateToOption(option.index)}
                onMouseEnter={() => selectOption(option.index)}
                onMouseLeave={() => selectOption(0)}
                style={
                  showOption() === option.index ? {
                    width: '100%',
                    height: '100%',
                    top: '0px',
                    left: '0px',
                    "z-index": 99
                  } : {}
                }
              />
            )
          }
          <div class={styles.optionTextContainer}>
            <p class={styles.optionText}>{optionText()}</p>
          </div>
          <h1 class={styles.titleReflection}>Mark's Demo Page</h1>
          {
            demoOptions.map( refloption => 
              <img 
                class={option() === refloption.index ? refloption.reflHoverstyle : refloption.reflStyle}
                src={refloption.image}
                alt={refloption.alt}
              />
            )
          }
          <div class={styles.optionTextReflectionContainer}>
            <p class={styles.optionTextReflection}>{optionText()}</p>
          </div>
          
        </div>
      </div>
      
    </div>
  );
};

export default App;
