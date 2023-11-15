import { useRouter } from "next/navigation";
import { Arrows } from "../../types/Arrows";
import "./BackButton.css";

export const BackButton = () => {
  const router = useRouter();

  return (
    <div tabIndex={-1}>
      <button className={"back-button"} onClick={() => router.back()}>
        <svg height="60" width="60" xmlns="http://www.w3.org/2000/svg">
          <circle className="shape" cx="30" cy="30" r="20" />
          <text x="50%" y="50%" textAnchor="middle" alignmentBaseline="middle">
            {Arrows.left}
          </text>
        </svg>
      </button>
      <style jsx>{`
        .shape:focus {
          outline: -webkit-focus-ring-color auto 0;
        }
      `}</style>
    </div>
  );
};

