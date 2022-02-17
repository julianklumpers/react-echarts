import React from "react";
import ReactDOMServer from "react-dom/server";
import * as echarts from "echarts/core";
import { TooltipComponent, TooltipComponentOption } from "echarts/components";
import { useChart } from "../../Chart";

echarts.use([TooltipComponent]);

const Line: React.FC<TooltipComponentOption> = ({
  children,
  content,
  ...options
}) => {
  const { addOption, removeOption } = useChart();

  const tooltipContent = React.useMemo(() => {
    if (content && React.isValidElement(content)) {
      return {
        padding: 0,
        renderMode: "html",
        borderColor: "transparent",
        borderWidth: 0,
        backgroundColor: "transparent",
        appendToBody: true,
        formatter: function (params, ticket, callback) {
          const html = ReactDOMServer.renderToStaticMarkup(
            React.cloneElement(content, { params })
          );

          return html;
        },
      };
    }

    return {};
  }, [content]);

  React.useEffect(() => {
    addOption("tooltip", {
      ...options,
      ...tooltipContent,
    });
    return () => removeOption("tooltip");
  }, [options, tooltipContent]);

  return null;
};

export default Line;
