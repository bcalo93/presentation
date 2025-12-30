interface Options {
  aspectRatio?: string;
  baseDimension?: 'height' | 'width';
}

/**
 * Calculates width and height dimensions maintaining a specific aspect ratio
 * 
 * @param aspectRatio - The aspect ratio in "width:height" format (e.g., "4:5")
 * @param baseDimension - The base dimension: can be 'width' or 'height'
 * @param baseValue - The value of the base dimension
 * @returns An object with calculated { width, height }
 * 
 * @example
 * // Calculate dimensions with 4:5 aspect ratio using height as base
 * const dims = calculateImageDimensions('4:5', 'height', 300);
 * // { width: 240, height: 300 }
 * 
 * @example
 * // Calculate dimensions with 4:5 aspect ratio using width as base
 * const dims = calculateImageDimensions('4:5', 'width', 240);
 * // { width: 240, height: 300 }
 */
export function calculateImageDimensions(
  baseValue: number,
  options: Options = {}
): { width: number; height: number } {

  const { aspectRatio = '1:1', baseDimension = 'height' } = options;

  const [ratioWidth, ratioHeight] = aspectRatio.split(':').map(Number);
  if (isNaN(ratioWidth) || isNaN(ratioHeight) || ratioWidth <= 0 || ratioHeight <= 0) {
    throw new Error(`Invalid aspect ratio format: ${aspectRatio}. Expected format: "width:height" (e.g., "4:5")`);
  }

  const aspectRatioValue = ratioWidth / ratioHeight;

  let width, height;

  if (baseDimension === 'width') {
    width = baseValue;
    height = Math.round(baseValue / aspectRatioValue);
  } else {
    height = baseValue;
    width = Math.round(baseValue * aspectRatioValue);
  }

  return { width, height };
}
