/**
* Use this file to define custom functions and blocks.
* Read more at https://arcade.makecode.com/blocks/custom
*/

// Define an enum for the dropdown options: Degrees or Radians
enum AngleUnit {
    //% block="Degrees"
    Degrees,
    //% block="Radians"
    Radians
}

/**
 * Angle Finder
 */
//% weight=50
//% color="#ff0000" icon="\uf200"
namespace Angle_Finder {
    /**
     * Calculates the angle between two points in degrees.
     * @param y2 the y coordinate of the second point
     * @param y1 the y coordinate of the first point
     * @param x2 the x coordinate of the second point
     * @param x1 the x coordinate of the first point
     */
    //% block="find angle y2 $y2 y1 $y1 x2 $x2 x1 $x1"
    //% inlineInputMode="inline"
    export function Find_Angle(y2: number, y1: number, x2: number, x1: number): number {
        // Add code here
        return Math.atan2(y2 - y1, x2 - x1) * (180 / Math.PI);
    }

    /**
     * Calculates the angle between two points and returns it in the specified unit.
     * @param y2 the y coordinate of the second point
     * @param y1 the y coordinate of the first point
     * @param x2 the x coordinate of the second point
     * @param x1 the x coordinate of the first point
     * @param unit the desired unit for the angle (Degrees or Radians)
     */
    //% block="find angle y2 $y2 y1 $y1 x2 $x2 x1 $x1 as $unit"
    //% inlineInputMode="inline"
    export function Find_Angle_With_Unit(y2: number, y1: number, x2: number, x1: number, unit: AngleUnit): number {
        const angleRadians = Math.atan2(y2 - y1, x2 - x1);

        if (unit === AngleUnit.Degrees) {
            return angleRadians * (180 / Math.PI);
        } else {
            return angleRadians;
        }
    }
}