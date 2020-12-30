// Transcrypt'ed from Python, 2020-12-30 16:18:22
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __proxy__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
var __name__ = 'builtins';
export var element_id = 0;
export var get_next_id = function () {
	element_id++;
	return element_id;
};
export var add_text = function (text) {
	var element = document.createElement ('p');
	element.textContent = text;
	element.id = get_next_id ();
	document.body.appendChild (element);
	return element.id;
};
export var add_image = function (filename) {
	var element = document.createElement ('img');
	element.src = filename;
	element.id = get_next_id ();
	document.body.appendChild (element);
	return element.id;
};
export var add_background = function (filename) {
	document.querySelector ('html').style.backgroundImage = 'url({})'.format (filename);
};
export var click = function (element_id, callback) {
	var element = document.getElementById (element_id);
	element.addEventListener ('click', callback.bind (null, element));
};
export var move_down = function (element_id, distance) {
	var element = document.getElementById (element_id);
	element.style.transition = '2s';
	setTimeout (translate_y.bind (null, element, distance), 400);
};
export var move_up = function (element_id, distance) {
	var element = document.getElementById (element_id);
	element.style.transition = '2s';
	setTimeout (translate_y.bind (null, element, -(distance)), 400);
};
export var position_element = function (element_id, x, y) {
	var element = document.getElementById (element_id);
	element.style.position = 'absolute';
	element.style.top = y + 'px';
	element.style.left = x + 'px';
};
export var set_text_color = function (element_id, color) {
	var element = document.getElementById (element_id);
	element.style.color = color;
};
export var translate_y = function (element, distance) {
	element.style.transform = 'translateY({}px)'.format (distance);
};
export var update_text = function (element_id, new_text) {
	var element = document.getElementById (element_id);
	element.textContent = new_text;
};

//# sourceMappingURL=builtins.map