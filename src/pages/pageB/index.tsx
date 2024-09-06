import BpmnModeler from "bpmn-js/lib/Modeler";
import "bpmn-js/dist/assets/diagram-js.css";
import "bpmn-js/dist/assets/bpmn-font/css/bpmn.css";
import "bpmn-js/dist/assets/bpmn-font/css/bpmn-codes.css";
import "bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css";

import { xmlStr } from "./xmlStr";
import { useEffect, useRef, useState } from "react";
const PageB = () => {
  const canvasRef = useRef<any>(null);
  const [instance, setInstance] = useState<BpmnModeler<null>>();
  useEffect(() => {
    if (canvasRef.current) {
      const bpmnModeler = new BpmnModeler({
        container: canvasRef.current,
      });
      setInstance(bpmnModeler);
      try {
        const result = bpmnModeler.importXML(xmlStr);
        // const { warnings } = result;
        // console.log(warnings);
      } catch (err) {
        // console.log(err.message, err.warnings);
      }
    }
  }, []);
  const handleSave = async () => {
    console.log('xxxxxxxxxxxxxx');
    
    debugger
    if (instance) {
      try {
        const result = await instance.saveXML({ format: true });
        console.log('BPMN XML:', result.xml);
        // You can now save the XML or send it to a server
      } catch (err) {
        console.error('Failed to save BPMN diagram', err);
      }
    }
  };

  return (
    <div style={{ width: "100%", height: "calc(100vh - 82px)" }}>
      <div style={{ position: 'relative', zIndex: 1 }}>
  <button onClick={()=>{
    debugger
    handleSave()
  }} style={{ zIndex: 2 }}>
    保存
  </button>
</div>
      <div ref={canvasRef} style={{ width: "100%", height: "100%" }}>
      </div>
    </div>
  );
};
export default PageB;
