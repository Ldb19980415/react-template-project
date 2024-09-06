export const xmlStr = `<?xml version="1.0" encoding="UTF-8"?>
<bpmn2:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmn2="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" id="sample-diagram" targetNamespace="http://bpmn.io/schema/bpmn" xsi:schemaLocation="http://www.omg.org/spec/BPMN/20100524/MODEL BPMN20.xsd">
  <bpmn2:process id="Process_1" isExecutable="false">
    <bpmn2:startEvent id="StartEvent_1">
      <bpmn2:outgoing>Flow_1ani6d6</bpmn2:outgoing>
    </bpmn2:startEvent>
    <bpmn2:endEvent id="Event_1aijvcx" />
    <bpmn2:endEvent id="Event_1umlj1k" />
    <bpmn2:endEvent id="Event_0edqn19" />
    <bpmn2:endEvent id="Event_1xt1ff4" />
    <bpmn2:exclusiveGateway id="Gateway_1tgyu55">
      <bpmn2:incoming>Flow_1ani6d6</bpmn2:incoming>
    </bpmn2:exclusiveGateway>
    <bpmn2:sequenceFlow id="Flow_1ani6d6" sourceRef="StartEvent_1" targetRef="Gateway_1tgyu55" />
  </bpmn2:process>
  <bpmndi:BPMNDiagram id="BPMNDiagram_1">
    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_1">
      <bpmndi:BPMNShape id="_BPMNShape_StartEvent_2" bpmnElement="StartEvent_1">
        <dc:Bounds x="192" y="82" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Event_1aijvcx_di" bpmnElement="Event_1aijvcx">
        <dc:Bounds x="562" y="82" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Event_1xt1ff4_di" bpmnElement="Event_1xt1ff4">
        <dc:Bounds x="322" y="232" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Event_1umlj1k_di" bpmnElement="Event_1umlj1k">
        <dc:Bounds x="342" y="472" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Event_0edqn19_di" bpmnElement="Event_0edqn19">
        <dc:Bounds x="312" y="302" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Gateway_1tgyu55_di" bpmnElement="Gateway_1tgyu55" isMarkerVisible="true">
        <dc:Bounds x="575" y="215" width="50" height="50" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="Flow_1ani6d6_di" bpmnElement="Flow_1ani6d6">
        <di:waypoint x="228" y="100" />
        <di:waypoint x="600" y="100" />
        <di:waypoint x="600" y="215" />
      </bpmndi:BPMNEdge>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</bpmn2:definitions>`;