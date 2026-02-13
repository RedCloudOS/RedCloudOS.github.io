import {
  Cloud,
  Shield,
  FingerprintPattern 
} from "lucide-react";

import kubernetes from "../assets/kubernetes.png";
import cloud from "../assets/cloud.png";
import puzzle from "../assets/puzzle.png";
import eternity from "../assets/eternity.png";

import "./heroCube.css";

export default function HeroCube() {
  return (
    <div className="cube-container">
      <div className="cube">
        <div className="face front">
          <img
            src={cloud}
            alt="cloud"
            className="w-[30%] h-[30%] object-contain hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="face back">
          <Shield size={48} />
        </div>

        <div className="face right">
          <img
            src={kubernetes}
            alt="kubernetes"
            className="w-[30%] h-[30%] object-contain hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="face left">
          <FingerprintPattern size={48} />
        </div>

        <div className="face top">
          <img
            src={eternity}
            alt="eternity"
            className="w-[30%] h-[30%] object-contain hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="face bottom">
          <img
            src={puzzle}
            alt="puzzle"
            className="w-[30%] h-[30%] object-contain hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </div>
  );
}
