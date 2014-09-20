function Taskbar(game) {

	function createTaskbar(taskbar){
		buildButton = game.add.button(300, 500, 'build', actionOnBuild, this);
		populateButton = game.add.button(400, 500, 'populate', actionOnPopulate, this);
		evolveButton = game.add.button(500, 500, 'evolve', actionOnEvolve, this);
	}

	function actionOnBuild(){
		damCount = board.getDamCount;
		damCount += Math.ceil(0.5 * board.numBeavers);
	}

	function actionOnPopulate(){
		numBeavers = Math.ceil(0.25 * board.numBeavers);
	}

	function actionOnEvolve(){
		this.game.switchState(gameObject.evolutionCard)
	}
}