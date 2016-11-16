import prop from '../prop';
import type { ElementNode } from '../../util/findElements';

export default (root:Object, nodes:Array<ElementNode>, propName:String):Object => {
	prop(root, nodes, (props:Object) => {
		propName.split(' ')
			.forEach(name => {
				delete props[name];
			});

		return props;
	});
	return root;
};
