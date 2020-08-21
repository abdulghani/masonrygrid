import React, { useMemo } from "react";

const MasonryGrid = ({
  children,
  col,
  className
}: {
  children: React.ReactElement[];
  col?: number;
  className?: string;
}) => {
  const _col = useMemo(() => col ?? 1, [col]);
  const renderedIntoCol = useMemo(() => {
    const tempCol: Array<Array<React.ReactElement>> = [];
    for (let i = 0; i < _col; i++) {
      tempCol.push([]);
    }
    for (let i = 0; i < children.length; i++) {
      tempCol[i % _col].push(children[i]);
    }
    return tempCol;
  }, [_col, children]);

  return useMemo(
    () => (
      <div style={{ display: "flex", flexDirection: "row" }}>
        {renderedIntoCol.map((item) => (
          <div
            className={className ?? ""}
            style={{ display: "flex", flexDirection: "column", flex: 1 }}
          >
            {item}
          </div>
        ))}
      </div>
    ),
    [renderedIntoCol]
  );
};

export default MasonryGrid;
