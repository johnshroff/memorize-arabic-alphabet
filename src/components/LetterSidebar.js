import React from 'react';
import {Sidebar} from "primereact/sidebar";
import {Button} from 'primereact/button';
import alphabet from '../lib/alphabet';


const Letter = (props) => {
	const {selected, letter, imageSize, onClick} = props;
	const style = {
		cursor: 'pointer',
		height: imageSize,
		width: imageSize,
		padding: '3px 3px 3px 3px',
		margin: '3px 3px 3px 3px'
	};
	const selectedStyle = selected ? {
		boxShadow: '0 0 5px rgba(81, 203, 238, 1)',
		border: '1px solid rgba(81, 203, 238, 1)'
	} : {};
	return (
		<img onClick={() => onClick(letter)}
			 style={{...style, ...selectedStyle}}
			 src={`../assets/images/${letter}.png`}
		/>
	);
};

export function LetterSidebar(props) {

	const {visible, onHide, onLetterSelected, selected, onSelectAll} = props;

	function onLetterClick(letter) {
		onLetterSelected(letter);
	}

	function createLetterRows() {
		const rows = [];
		const ar = [...Array(4).keys()];
		for (let i = 0; i < 7; ++i) {
			rows.push(
				<div>
					{ar.map((x) =>
							<Letter selected={selected.includes(alphabet[(x + (i * 4))])}
								letter={alphabet[(x + (i * 4))]}
								onClick={onLetterClick} imageSize={60}
							/>
						)
					}
				</div>
			);
		}
		return rows;
	}

	return (
		<Sidebar visible={visible} baseZIndex={1000000} onHide={onHide}>
			<br/>
			{createLetterRows()}
			<Button label={'Select All'} onClick={onSelectAll} />
		</Sidebar>
	);
};