import { useRef, useEffect } from 'react';
import p5 from 'p5';
import './animation.scss';

export default function Animation() {
  const animationRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let p5Instance: p5;

    const sketch = (p: p5) => {
      let nodes: Array<{
        x: number;
        y: number;
        angle: number;
        radius: number;
        speed: number;
        size: number;
        displaySize: number;
      }> = [];
      let connections: Array<{
        x1: number;
        y1: number;
        x2: number;
        y2: number;
      }> = [];
      let centerX: number,
        centerY: number,
        centerRadius: number,
        outerRadius: number;

      const numNodes = 10;
      const maxNodeSize = 50;
      const nodeColor: [number, number, number, number] = [23, 167, 198, 255];
      const connectionDistance = 350;
      const lineWidth = 1;
      const innerRadiusFactor = 0.2;
      const animationWidth = 900;
      const animationHeight = 800;

      const updateRadii = () => {
        centerRadius = Math.min(p.width, p.height) * innerRadiusFactor;
        outerRadius = Math.min(p.width, p.height) * 0.4;
      };

      const generateNodes = () => {
        nodes = [];
        for (let i = 0; i < numNodes; i++) {
          const angle = p.random(p.TWO_PI);
          const radius = p.random(centerRadius, outerRadius);
          const speed = p.random(-0.02, 0.02);
          const size = p.random(1, maxNodeSize);
          nodes.push({
            x: 0,
            y: 0,
            angle,
            radius,
            speed,
            size,
            displaySize: size,
          });
        }
      };

      const updateNodes = () => {
        for (let node of nodes) {
          node.angle += node.speed;
          node.x = centerX + p.cos(node.angle) * node.radius;
          node.y = centerY + p.sin(node.angle) * node.radius;
        }
      };

      const updateConnections = () => {
        connections = [];
        for (let i = 0; i < nodes.length; i++) {
          for (let j = i + 1; j < nodes.length; j++) {
            const d = p.dist(nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y);
            if (d < connectionDistance) {
              connections.push({
                x1: nodes[i].x,
                y1: nodes[i].y,
                x2: nodes[j].x,
                y2: nodes[j].y,
              });
            }
          }
        }
      };

      p.setup = () => {
        p.createCanvas(animationWidth, animationHeight).parent(
          animationRef.current!
        );
        centerX = p.width / 2;
        centerY = p.height / 2;
        updateRadii();
        generateNodes();
      };

      p.draw = () => {
        p.background(28, 28, 28);

        // Draw connections
        p.stroke(nodeColor[0], nodeColor[1], nodeColor[2]);
        p.strokeWeight(lineWidth);
        for (let conn of connections) {
          p.line(conn.x1, conn.y1, conn.x2, conn.y2);
        }

        // Draw nodes
        p.noStroke();
        p.fill(...nodeColor);
        for (let node of nodes) {
          p.ellipse(node.x, node.y, node.displaySize, node.displaySize);
        }

        updateNodes();
        updateConnections();
      };

      p.windowResized = () => {
        p.resizeCanvas(animationWidth, animationHeight);
        updateRadii();
        generateNodes();
      };
    };

    p5Instance = new p5(sketch);

    return () => {
      p5Instance.remove();
    };
  }, []);

  return <div className="animation" ref={animationRef}></div>;
}
