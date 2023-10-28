// import React from 'react';


// export default function Dashboard() {

//     const styles = {
//         circle: {
//             height: '24px',
//             width: '24px',
//             borderRadius: '24px',
//             backgroundColor: 'black',
//             position: 'fixed',
//             top: 0,
//             left: 0,
//             pointerEvents: 'none',
//             zIndex: 99999999 /* so that it stays on top of all other elements */
//           }

//       };
//       const coords = { x: 0, y: 0 };
//       const circles = document.querySelectorAll(".circle");

//       const colors = [
//         "#ffb56b",
//         "#fdaf69",
//         "#f89d63",
//         "#f59761",
//         "#ef865e",
//         "#ec805d",
//         "#e36e5c",
//         "#df685c",
//         "#d5585c",
//         "#d1525c",
//         "#c5415d",
//         "#c03b5d",
//         "#b22c5e",
//         "#ac265e",
//         "#9c155f",
//         "#950f5f",
//         "#830060",
//         "#7c0060",
//         "#680060",
//         "#60005f",
//         "#48005f",
//         "#3d005e"
//       ];

//       circles.forEach(function (circle, index) {
//         circle.x = 0;
//         circle.y = 0;
//         circle.style.backgroundColor = colors[index % colors.length];
//       });

//       window.addEventListener("mousemove", function(e){
//         coords.x = e.clientX;
//         coords.y = e.clientY;

//       });

//       function animateCircles() {

//         let x = coords.x;
//         let y = coords.y;

//         circles.forEach(function (circle, index) {
//           circle.style.left = x - 12 + "px";
//           circle.style.top = y - 12 + "px";

//           circle.style.scale = (circles.length - index) / circles.length;

//           circle.x = x;
//           circle.y = y;

//           const nextCircle = circles[index + 1] || circles[0];
//           x += (nextCircle.x - x) * 0.3;
//           y += (nextCircle.y - y) * 0.3;
//         });

//         requestAnimationFrame(animateCircles);
//       }

//       animateCircles();
//   return (
//     <>
//         <div className="circle"></div>
//         <div className="circle"></div>
//         <div className="circle"></div>
//         <div className="circle"></div>
//         <div className="circle"></div>
//         <div className="circle"></div>
//         <div className="circle"></div>
//         <div className="circle"></div>
//         <div className="circle"></div>
//         <div className="circle"></div>
//         <div className="circle"></div>
//         <div className="circle"></div>
//         <div className="circle"></div>
//         <div className="circle"></div>
//         <div className="circle"></div>
//         <div className="circle"></div>
//         <div className="circle"></div>
//         <div className="circle"></div>
//         <div className="circle"></div>
//         <div className="circle"></div>
//     </>
//   );
// }
import React, { useEffect, useRef } from 'react';

// const MouseMove: React.FC = () => {
    export default function MouseMove(){
const coords = { x: 0, y: 0 };
const circlesRef = useRef<HTMLElement[]>([]);

  const colors = [
    "#ffb56b",
    "#fdaf69",
    "#f89d63",
    "#f59761",
    "#ef865e",
    "#ec805d",
    "#e36e5c",
    "#df685c",
    "#d5585c",
    "#d1525c",
    "#c5415d",
    "#c03b5d",
    "#b22c5e",
    "#ac265e",
    "#9c155f",
    "#950f5f",
    "#830060",
    "#7c0060",
    "#680060",
    "#60005f",
    "#48005f",
    "#3d005e"
  ];

  useEffect(() => {
    circlesRef.current = Array.from(document.querySelectorAll<HTMLElement>(".circle"));

    circlesRef.current.forEach((circle, index) => {
      circle.style.width = '24px';
      circle.style.height = '24px';
      circle.style.borderRadius = '24px';
      circle.style.backgroundColor = colors[index % colors.length];
      circle.style.position = 'fixed';
      circle.style.top = '0';
      circle.style.left = '0';
      circle.style.pointerEvents = 'none';
      circle.style.zIndex = '99999999';
      (circle as any).x = 0; // Précisez le type ici
      (circle as any).y = 0; // Précisez le type ici
    });

    const handleMouseMove = (e: MouseEvent) => {
      coords.x = e.clientX;
      coords.y = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animateCircles = () => {
      let x = coords.x;
      let y = coords.y;

      circlesRef.current.forEach((circle, index) => {
        circle.style.left = x - 12 + 'px';
        circle.style.top = y - 12 + 'px';
        (circle as any).x = x; // Précisez le type ici
        (circle as any).y = y; // Précisez le type ici

        const nextCircle = circlesRef.current[index + 1] || circlesRef.current[0];
        x += (nextCircle.getBoundingClientRect().left - x) * 0.3;
        y += (nextCircle.getBoundingClientRect().top - y) * 0.3;
      });

      requestAnimationFrame(animateCircles);
    };

    animateCircles();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  return (
    <div>
      {circlesRef.current.map((circle, index) => (
        <div key={index} className="circle"></div>
      ))}
    </div>
  );
};

// export default MouseMove;
