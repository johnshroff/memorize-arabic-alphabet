import {mount} from "enzyme/build";
import {LetterCard} from "./LetterCard";
import React from "react";

test('Renders letter img', () => {
	const component = mount(<LetterCard letter={'alif'} />);
	const image = component.find(`img[src="../assets/images/alif.png"]`);
	expect(image).toHaveLength(1);
});

test('Renders all buttons', () => {
	const component = mount(<LetterCard letter={'alif'} />);
	const buttons = component.find('.p-button');
	expect(buttons).toHaveLength(3);
});


test('Calls onNextClick when button is pushed', () => {
	const onNextClick = jest.fn();
	const component = mount(<LetterCard letter={'alif'} onNextClick={onNextClick} />);

	component.find('button.j-next-button').simulate('click');
	expect(onNextClick).toBeCalled();
});

test('Letter visibility functionality', () => {
	const component = mount(<LetterCard letter={'alif'} />);
	const letterHeader = component.find('h2');

	expect(letterHeader.text()).toEqual('ALIF');
	expect(letterHeader.props().style).toMatchObject({visibility: 'hidden'});

	component.find('button.j-letter-button').simulate('click');

	const newLetterHeader = component.find('h2');

	expect(newLetterHeader.props().style).not.toMatchObject({visibility: 'hidden'});
});
