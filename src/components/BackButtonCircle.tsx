import styled from "styled-components";
import { useRouter } from "next/navigation";

export const BackButtonCircle = () => {
  const router = useRouter();

  return (
    <>
      <SvgButton onClick={() => router.back()}>
        <svg height="60" width="60" xmlns="http://www.w3.org/2000/svg">
          <circle className="shape" cx="30" cy="30" r="20" />
          <text x="50%" y="50%" textAnchor="middle" alignmentBaseline="middle">
            {"←"}
          </text>
        </svg>
      </SvgButton>
    </>
  );
};

const SvgButton = styled.button`
  position: absolute;
  background: none;
  border: none;

  .shape {
    stroke-dasharray: 140 540;
    stroke-dashoffset: -474;
    stroke-width: 2px;
    fill: transparent;
    stroke: #19f6e8;
    transition:
      stroke-width 0.5s,
      stroke-dashoffset 0.5s,
      stroke-dasharray 0.5s;
  }

  text {
    cursor: pointer;
    font-size: 1rem;
    z-index: 1;
    fill: #c0c0c0;
  }

  svg:hover .shape {
    stroke-width: 1px;
    stroke-dashoffset: 0;
    stroke-dasharray: 760;
  }
`;
