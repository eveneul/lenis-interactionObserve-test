import logo from "./logo.svg";
import "./App.css";
import { useEffect, useRef } from "react";
import InviewTarget from "./components/interaction/inview-observer";
import { useRecoilState, useRecoilValue } from "recoil";
import { scrollState } from "./state/common";
import Lenis from "@studio-freight/lenis";
import { useScroll } from "./hooks/use-scroll";

function App() {
  const list = useRef(null);
  const button = useRef(null);
  const inviewTarget = useRef(null);
  const lenis = useScroll();

  const lenisState = useRecoilValue(scrollState);

  // useEffect(() => {
  //   if (button.current) {
  //     inviewTarget.current = new InviewTarget(button.current);
  //     inviewTarget.current.observeElement();
  //   }

  //   return () => {
  //     if (inviewTarget.current) inviewTarget.current.disconnect();
  //   };
  // }, []);

  // useEffect(() => {
  //   if (button.current) {
  //     inviewTarget.current = new InviewTarget(button.current);
  //     inviewTarget.current.observeElement();
  //   }
  //   // const targets = [];
  //   // if (list.current && button.current) {
  //   //   targets.push(...list.current.querySelectorAll("li"));
  //   //   targets.push(button.current);
  //   // }

  //   // if (targets.length > 0) {
  //   //   inviewTarget.current = new InviewTarget(targets);
  //   //   inviewTarget.current.observeElement();
  //   // }

  //   return () => {
  //     if (inviewTarget.current) {
  //       inviewTarget.current.disconnect();
  //     }
  //   };
  // }, []);

  return (
    <div className="App">
      <ul className="box-list" ref={list}>
        <li className="box-item"></li>
        <li className="box-item"></li>
        <li className="box-item"></li>
        <li className="box-item"></li>
        <li className="box-item"></li>
        <li className="box-item"></li>
        <li className="box-item"></li>
        <li className="box-item"></li>
      </ul>
      <button className="flexible-button" ref={button}>
        Button
      </button>
      <ul className="box-list" ref={list}>
        <li className="box-item"></li>
        <li className="box-item"></li>
        <li className="box-item"></li>
        <li className="box-item"></li>
        <li className="box-item"></li>
        <li className="box-item"></li>
        <li className="box-item"></li>
        <li className="box-item"></li>
      </ul>
    </div>
  );
}

export default App;
