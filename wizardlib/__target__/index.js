// Transcrypt'ed from Python, 2020-12-30 16:58:59
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __proxy__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import {randint} from './random.js';
import {add_background, add_image, add_text, click, element_id, get_next_id, move_down, move_up, position_element, remove_element, set_text_color, translate_y, update_text, vanish} from './builtins.js';
var __name__ = '__main__';
export var kill_ghost = function (ghost) {
	vanish (ghost);
	score++;
	update_text (score_text_element, score);
	if (score > win_score) {
		var win_text = 'You win!!!';
		var win_text_size = 100;
		var win_text_color = 'white';
		var win_text_element = add_text (win_text, win_text_size);
		set_text_color (win_text_element, win_text_color);
	}
};
add_background ('background.png');
export var score = 0;
export var win_score = 5;
export var score_text_size = 64;
export var score_text_element = add_text (score, score_text_size);
export var score_text_x = 1200;
export var score_text_y = 0;
position_element (score_text_element, score_text_x, score_text_y);
export var score_text_color = 'white';
set_text_color (score_text_element, score_text_color);
export var num_ghosts = 5;
for (var _ = 0; _ < num_ghosts; _++) {
	var ghost_image_size = 100;
	var ghost_image_filename = 'ghost.png';
	var ghost_image_element = add_image (ghost_image_filename, ghost_image_size);
	var ghost_x = randint (0, 1600);
	var ghost_y = 1000;
	position_element (ghost_image_element, ghost_x, ghost_y);
	var y_pos_above_page = ghost_y + 500;
	var move_time = randint (10, 20);
	move_up (ghost_image_element, y_pos_above_page, move_time);
	click (ghost_image_element, kill_ghost);
}

//# sourceMappingURL=index.map