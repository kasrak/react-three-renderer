import ReactInstrumentation from 'react-dom/lib/ReactInstrumentation';
import ReactDOMUnknownPropertyHook from 'react-dom/lib/ReactDOMUnknownPropertyHook';
import ReactDOMNullInputValuePropHook from 'react-dom/lib/ReactDOMNullInputValuePropHook';

let devToolRemoved = false;

function removeDevTool() {
  if (!devToolRemoved) {
    if (ReactInstrumentation.debugTool) {
      ReactInstrumentation.debugTool.removeHook(ReactDOMUnknownPropertyHook);
      ReactInstrumentation.debugTool.removeHook(ReactDOMNullInputValuePropHook);
    }

    devToolRemoved = true;

    return true;
  }

  return false;
}

removeDevTool.restore = function restore() {
  devToolRemoved = false;

  if (ReactInstrumentation.debugTool) {
    ReactInstrumentation.debugTool.addHook(ReactDOMUnknownPropertyHook);
    ReactInstrumentation.debugTool.addHook(ReactDOMNullInputValuePropHook);
  }
};

module.exports = removeDevTool;
