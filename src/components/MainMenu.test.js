import {mount} from "enzyme/build";
import {MainMenu} from "./MainMenu";
import React from "react";

test('Displays thumbnails when visible', () => {
	const component = mount(<MainMenu selected={['alif', 'tha']} onLetterSelected={() => {}} />);
	const nonRenderedImages = component.find('.j-letter-thumb');
	expect(nonRenderedImages).toHaveLength(0);

	component.find('.p-menuitem-link').simulate('click');

	const letterImages = component.find('.j-letter-thumb');
	expect(letterImages).toHaveLength(28);
});

test('Highlights selected letters', () => {
	const component = mount(<MainMenu selected={['alif', 'tha']} />);
	component.find('.p-menuitem-link').simulate('click');

	const selectedAlif = component.find(".j-letter-thumb[alt='thumb-alif']");

	expect(selectedAlif.props().style).toMatchObject({
		boxShadow: '0 0 5px rgba(81, 203, 238, 1)',
		border: '1px solid rgba(81, 203, 238, 1)'
	});

	const unselectedHHa = component.find(".j-letter-thumb[alt='thumb-hha']");

	expect(unselectedHHa.props().style).not.toMatchObject({
		boxShadow: '0 0 5px rgba(81, 203, 238, 1)',
		border: '1px solid rgba(81, 203, 238, 1)'
	});

	component.setProps({selected: ['alif', 'tha', 'hha']});

	const selectedHHa = component.find(".j-letter-thumb[alt='thumb-hha']");

	expect(selectedHHa.props().style).toMatchObject({
		boxShadow: '0 0 5px rgba(81, 203, 238, 1)',
		border: '1px solid rgba(81, 203, 238, 1)'
	});
});

test('Calls onLetterSelected when letter is clicked', () => {
	const onLetterSelected = jest.fn();
	const component = mount(<MainMenu selected={['alif']} onLetterSelected={onLetterSelected} />);

	component.find('.p-menuitem-link').simulate('click');

	const selectedAlif = component.find(".j-letter-thumb[alt='thumb-alif']");

	selectedAlif.simulate('click');
	expect(onLetterSelected).toBeCalled();
});
