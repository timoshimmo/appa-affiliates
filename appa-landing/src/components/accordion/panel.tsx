import React, { useState, useEffect, useRef } from 'react';

type PanelProps = {
    label: string,
    content: string, 
    activeTab: number | undefined, 
    index: number, 
    activateTab: any
  };
  
  const Panel: React.FC<PanelProps> = ({
    label,
    content, 
    activeTab, 
    index, 
    activateTab
  }) => {

    const [height, setHeight] = useState<number | undefined>(0);
    const panelRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
          window.setTimeout(() => {
            //const el = ReactDOM.findDOMNode(this?.refs["panel"]) as HTMLDivElement | null;
            const heights = panelRef.current?.querySelector('.panel__inner')?.scrollHeight;
            setHeight(heights);
          }, 0);
    }, []); 

    const isActive = activeTab === index;
		const innerStyle = {
			height:  `${isActive ? height : 0}px`
		}

    return (
        <div className='panel'
          role='tabpanel'
          aria-expanded={ isActive } ref={panelRef}>
            <button className='panel__label'
              role='tab'
              onClick={ activateTab }>
              { label }
            </button>
            <div className='panel__inner'
              style={ innerStyle }
              aria-hidden={ !isActive }>
              <p className='panel__content'>
                { content }
              </p>
            </div>
      </div>
    );
  }

  export default Panel;


