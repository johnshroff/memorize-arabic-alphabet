import React, {useState, useRef} from 'react';
import './App.css';

import {LetterCard} from "./components/LetterCard";
import {MainMenu} from "./components/MainMenu";
import _ from 'underscore';
import alphabet from './lib/alphabet';

const shuffle = (a) => {
	for (let i = a.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[a[i], a[j]] = [a[j], a[i]];
	}
	return a;
};

function App() {

	const [selected, setSelected] = useState(shuffle(_.clone(alphabet)));
	const [letterIndex, setLetterIndex] = useState(0);
	const visited = useRef([]);

	function onLetterSelected(letter) {
		let newSelected = _.clone(selected);
		if (selected.includes(letter)) {
			newSelected = _.without(selected, letter);
		} else {
			newSelected.push(letter);
		}
		visited.current = [];
		setLetterIndex(0);
		setSelected(shuffle(newSelected));
	}

	function onNextClick() {
		visited.current.push(selected[letterIndex]);
		if (_.isEqual(visited.current, selected)) {
			setSelected(shuffle(_.clone(selected)));
			visited.current = [];
			setLetterIndex(0);
		} else {
			setLetterIndex(letterIndex + 1);
		}
	}

	function onSelectAll() {
		if (selected.length > 0) {
			setSelected([]);
		} else {
			setSelected(shuffle(_.clone(alphabet)));
		}
	}

	return (
		<div className="App">
			<MainMenu selected={selected}
				onLetterSelected={onLetterSelected}
				onSelectAll={onSelectAll}
			/>
			<header className="App-header">
				{selected[letterIndex] != null ?
					<LetterCard letter={selected[letterIndex]} onNextClick={onNextClick}/> :
					<h3>No Letters Selected</h3>
				}
			</header>
		</div>
  );
}

export default App;
