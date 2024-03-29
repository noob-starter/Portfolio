/**
 * Detects if two elements are colliding
 *
 * Credit goes to BC on Stack Overflow, cleaned up a little bit
 *
 * @link http://stackoverflow.com/questions/5419134/how-to-detect-if-two-divs-touch-with-jquery
 * @param $div1
 * @param $div2
 * @returns {boolean}
 */
function is_colliding($div1, $div2) {
    // Div 1 data
    var d1_offset = { top: $div1.offsetTop, left: $div1.offsetLeft };
    var d1_height = $div1.offsetHeight;
    var d1_width = $div1.offsetWidth;
    var d1_distance_from_top = d1_offset.top + d1_height;
    var d1_distance_from_left = d1_offset.left + d1_width;
  
    // Div 2 data
    var d2_offset = { top: $div2.offsetTop, left: $div2.offsetLeft };
    var d2_height = $div2.offsetHeight;
    var d2_width = $div2.offsetWidth;
    var d2_distance_from_top = d2_offset.top + d2_height;
    var d2_distance_from_left = d2_offset.left + d2_width;
  
    var not_colliding =
      d1_distance_from_top < d2_offset.top ||
      d1_offset.top > d2_distance_from_top ||
      d1_distance_from_left < d2_offset.left ||
      d1_offset.left > d2_distance_from_left;
  
    return !not_colliding;
  }
  
  export default is_colliding;
  