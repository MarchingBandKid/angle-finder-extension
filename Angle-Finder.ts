
/**
* Use this file to define custom functions and blocks.
* Read more at https://arcade.makecode.com/blocks/custom
*/

enum MyEnum {
    //% block="one"
    One,
    //% block="two"
    Two
}

/**
 * Angle Finder
 */
//% weight=50
//% color="#ff0000" icon="\uf065"
namespace Angle_Finder {
    /**
     * TODO: describe your function here
     * @param n describe parameter here, eg: 5
     * @param s describe parameter here, eg: "Hello"
     * @param e describe parameter here
     */
    //% block
    export function Find_Angle(y2: number, y1: number, x2: number, x1: number) {
        // Add code here
        return Math.atan2(y2 - y1, x2 - x1) * (180 / 3.14159)
    }

    /**
     * TODO: describe your function here
     * @param value describe value here, eg: 5
     */
    //% block
   
}
