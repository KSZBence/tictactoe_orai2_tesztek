import Jatekter from  "../Jatekter.js";

QUnit.module('Játéktér ellenörzés', function (hooks) {
    let jatekter;
    hooks.before(() =>{
        jatekter = new Jatekter;
    });

    QUnit.test('létezik e', function (assert) {
        assert.ok(jatekter.ellenorzes, 'létezik');
    });
  
    QUnit.test('létezik e', function (assert) {
        assert.ok(jatekter.getVizszintes, 'létezik');
    });

    QUnit.test('létezik e', function (assert) {
        assert.ok(jatekter.getAtlo, 'létezik');
    });

    QUnit.test('létezik e', function (assert) {
        assert.ok(jatekter.getFuggoleges, 'létezik');
    });
});


QUnit.module('getvizzintes tesztelése', function (hooks) {
    let jatekter;
    hooks.before(() =>{
        jatekter = new Jatekter;
    });
  
    QUnit.test('létezik e', function (assert) {
        jatekter.lista = [" "," "," "," "," "," "," "," "," "]
        assert.equal(jatekter.getVizszintes(), '   @   @   @');
    });

    QUnit.test('létezik e', function (assert) {
        jatekter.lista = ["X","X","X"," ","O"," "," "," "," "]
        assert.equal(jatekter.getVizszintes(), 'XXX@ O @   @');
    });

    QUnit.test('létezik e', function (assert) {
        jatekter.lista = ["O","O","O"," ","X"," "," "," "," "]
        assert.equal(jatekter.getVizszintes(), 'OOO@ X @   @');
    });

    QUnit.test('létezik e', function (assert) {
        jatekter.lista = ["   ","   ","   "," "," "," "," "," "," "]
        assert.equal(jatekter.getVizszintes(), '         @   @   @');
    });
    
    QUnit.test('létezik e', function (assert) {
        jatekter.lista = ["O","X","O","X","O","X"," "," "," "]
        assert.equal(jatekter.getVizszintes(), 'OXO@XOX@   @');
    });

    QUnit.test('létezik e', function (assert) {
        jatekter.lista = ["O","X","O","X","X","X","X","O","X"]
        assert.equal(jatekter.getVizszintes(), 'OXO@XXX@XOX@');
    });

    QUnit.test('létezik e', function (assert) {
        jatekter.lista = ["O","X","O","X","O","X","O","X","O"]
        assert.equal(jatekter.getVizszintes(), 'OXO@XOX@OXO@');
    });

    QUnit.test('létezik e', function (assert) {
        jatekter.lista = ["O","X","O","O","O","X","X","O","X"]
        assert.equal(jatekter.getVizszintes(), 'OXO@OOX@XOX@');
    });

});

QUnit.module('getfuggoleges tesztelése', function (hooks) {
    let jatekter;
    hooks.before(() =>{
        jatekter = new Jatekter;
    });
  
    QUnit.test('létezik e', function (assert) {
        jatekter.lista = [" "," "," "," "," "," "," "," "," "]
        assert.equal(jatekter.getFuggoleges(), '   @   @   @');
    });

    QUnit.test('létezik e', function (assert) {
        jatekter.lista = [
            "X"," "," ",
            "X","O"," ",
            "X"," "," "]
        assert.equal(jatekter.getFuggoleges(), 'XXX@ O @   @');
    });

    QUnit.test('létezik e', function (assert) {
        jatekter.lista = [
            "O"," "," ",
            "O","X"," ",
            "O"," "," "]
        assert.equal(jatekter.getFuggoleges(), 'OOO@ X @   @');
    });

    QUnit.test('létezik e', function (assert) {
        jatekter.lista = [
            "   "," "," ",
            "   "," "," ",
            "   "," "," "]
        assert.equal(jatekter.getFuggoleges(), '         @   @   @');
    });
    
    QUnit.test('létezik e', function (assert) {
        jatekter.lista = [
            "O","X"," ",
            "X","O"," ",
            "O","X"," "]
        assert.equal(jatekter.getFuggoleges(), 'OXO@XOX@   @');
    });

    QUnit.test('létezik e', function (assert) {
        jatekter.lista = [
            "O","X","O",
            "X","O","X",
            "X","O","X"]
        assert.equal(jatekter.getFuggoleges(), 'OXX@XOO@OXX@');
    });

    QUnit.test('létezik e', function (assert) {
        jatekter.lista = [
            "O","X","O",
            "O","O","X",
            "O","X","O"]
        assert.equal(jatekter.getFuggoleges(), 'OOO@XOX@OXO@');
    });

    QUnit.test('létezik e', function (assert) {
        jatekter.lista = [
            "X","O","X",
            "O","O","X",
            "O","X","O"]
        assert.equal(jatekter.getFuggoleges(), 'XOO@OOX@XXO@');
    });

});

QUnit.module('getATLO tesztelése', function (hooks) {
    let jatekter;
    hooks.before(() =>{
        jatekter = new Jatekter;
    });
  
    QUnit.test('létezik e', function (assert) {
        jatekter.lista = [" "," "," "," "," "," "," "," "," "]
        assert.equal(jatekter.getAtlo(), '   @   ');
    });

    QUnit.test('létezik e', function (assert) {
        jatekter.lista = [
            "X"," "," ",
            " ","X"," ",
            " "," ","X"]
        assert.equal(jatekter.getAtlo(), 'XXX@ X ');
    });

    QUnit.test('létezik e', function (assert) {
        jatekter.lista = [
            "O"," "," ",
            "X","O"," ",
            " "," ","O"]
        assert.equal(jatekter.getAtlo(), 'OOO@ O ');
    });

    QUnit.test('létezik e', function (assert) {
        jatekter.lista = [
            "   "," "," ",
            " ","   "," ",
            " "," ","   "]
        assert.equal(jatekter.getAtlo(), '         @     ');
    });
    
    QUnit.test('létezik e', function (assert) {
        jatekter.lista = [
            "O","X"," ",
            "X","O"," ",
            "O","X","X"]
        assert.equal(jatekter.getAtlo(), 'OOX@ OO');
    });

    QUnit.test('létezik e', function (assert) {
        jatekter.lista = [
            "O","X","O",
            "X","O","X",
            "X","O","X"]
        assert.equal(jatekter.getAtlo(), 'OOX@OOX');
    });

    QUnit.test('létezik e', function (assert) {
        jatekter.lista = [
            "O","X","O",
            "O","O","X",
            "X","X","O"]
        assert.equal(jatekter.getAtlo(), 'OOO@OOX');
    });

    QUnit.test('létezik e', function (assert) {
        jatekter.lista = [
            "X","O","O",
            "O","O","X",
            "X","X","O"]
        assert.equal(jatekter.getAtlo(), 'XOO@OOX');
    });

});


