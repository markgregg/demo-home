import { Component, createSignal, onMount } from 'solid-js';

import desktop from './assets/desktop.jpg';
import agGrid from './assets/ag-grid.png';
import select from './assets/select.png';
import table from './assets/table.png';
import javascript from './assets/javascript.png';
import agGridMobile from './assets/ag-grid - mobile.png';
import selectMobile from './assets/select - mobile.png';
import tableMobile from './assets/table - mobile.png';
import javascriptMobile from './assets/javascript - mobile.png';
import styles from './App.module.css';
interface DemoOption {
  index: number;
  image: string;
  mobileImage: string;
  alt: string;
  style: string;
  reflStyle: string;
  reflHoverstyle: string;
}

const demoOptions: DemoOption[] = [
  {index: 1, image: select, mobileImage: selectMobile, alt: 'select', style: styles.option1, reflStyle: styles.option1Reflection, reflHoverstyle: styles.option1ReflectionHover},
  {index: 2, image: agGrid, mobileImage: agGridMobile, alt: 'agGrid', style: styles.option2, reflStyle: styles.option2Reflection, reflHoverstyle: styles.option2ReflectionHover},
  {index: 3, image: table, mobileImage: tableMobile, alt: 'table', style: styles.option3, reflStyle: styles.option3Reflection, reflHoverstyle: styles.option3ReflectionHover},
  {index: 4, image: javascript, mobileImage: javascriptMobile, alt: 'javascript', style: styles.option4, reflStyle: styles.option4Reflection, reflHoverstyle: styles.option4ReflectionHover}
]
const App: Component = () => {
  let optionTextRef: HTMLParagraphElement | undefined = undefined;
  let screenRef: HTMLDivElement | undefined = undefined;
  const [optionTextTop,setOptionTextTop] = createSignal();
  const [optionTextObserver,setOptionTextObserver] = createSignal<ResizeObserver>();
  const [screenRefObserver,setScreenRefObserver] = createSignal<ResizeObserver>();
  const [optionText,setOptionText] = createSignal("");
  const [option,setOption] = createSignal(0);
  const [showOption,setShowOption] = createSignal(0);

  onMount(() => {
    if( screenRef && optionTextRef ) {
      const adjustSize = () => {
        if( screenRef && optionTextRef )  {
          setOptionTextTop(screenRef.clientHeight - optionTextRef.clientHeight);
        }
      };
      setOptionTextObserver(new ResizeObserver(adjustSize));
      setScreenRefObserver(new ResizeObserver(adjustSize));
      optionTextObserver()?.observe(optionTextRef);
      screenRefObserver()?.observe(screenRef);

      adjustSize();
    }
    setOption(0);
  });

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

  const isMobile = (): boolean => {
    return window.matchMedia("only screen and (max-width: 600px)").matches;
  }

  return (
    <div class={styles.frame}>
      <div class={styles.page}>
        
        <div class={styles.primary}>
          <h1 class={styles.title}>Mark's Demo Page</h1>
          <img 
            class={styles.desktopImage}
            src={desktop}
            alt="main"
            object-fit="contain"
          />
          <div 
            ref={screenRef}
            class={styles.screen}
          >
            <div 
              class={styles.optionTextContainer}
              style={{
                top: optionTextTop() ? `${optionTextTop()}px` : '92%'
              }}
            >
              <p 
                class={styles.revolvingText}
                ref={optionTextRef}
              >{optionText()}</p>
            </div>
          </div>
          {
            demoOptions.map( option => 
              <img 
                class={option.style}
                src={isMobile() ? option.mobileImage : option.image}
                alt={option.alt}
                onClick={() => nagivateToOption(option.index)}
                onMouseEnter={() => selectOption(option.index)}
                onMouseLeave={() => selectOption(0)}
                style={
                  showOption() === option.index ? {
                    width: '100%',
                    height: '200%',
                    top: '0px',
                    left: '0px',
                    "z-index": 99
                  } : {}
                }
              />) 
            }
        </div>



        <div class={styles.reflection}>
          <h1 class={styles.titleReflection}>Mark's Demo Page</h1>
          <img class={styles.reflectionImage}
            src={desktop}
            alt="main-reflection"
          />

          <div class={styles.screenReflection}>
            <div class={styles.optionTextContainerReflection}>
              <p class={styles.revolvingTextReflection}>{optionText()}</p>
            </div>
          </div>
          <div class={styles.overlay}/>
            {
              demoOptions.map( refloption => 
                <img 
                  class={option() === refloption.index ? refloption.reflHoverstyle : refloption.reflStyle}
                  src={isMobile() ? refloption.mobileImage : refloption.image}
                  alt={refloption.alt}
                />
              )
            }
        </div>
      </div>
      
    </div>
  );
};

export default App;
