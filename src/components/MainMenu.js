import React, {useState} from 'react';
import {Menubar} from "primereact/menubar";
import {LetterSidebar} from "./LetterSidebar";

export function MainMenu(props) {
	const {onLetterSelected, selected, onSelectAll} = props;
	const [sidebarVisible, setSidebarVisible] = useState(false);

	function toggleSidebar() {
		setSidebarVisible(!sidebarVisible)
	}


	const items = [
		{
			icon: 'pi pi-bars',
			command: toggleSidebar
		}
	];

	return (
		<div>
			<Menubar model={items} />
			<LetterSidebar visible={sidebarVisible}
				selected={selected}
				onLetterSelected={onLetterSelected}
				onHide={() => setSidebarVisible(false)}
				onSelectAll={onSelectAll}
			/>
		</div>
	);
};
