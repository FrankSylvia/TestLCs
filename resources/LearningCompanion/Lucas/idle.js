(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.idle = function() {
	this.initialize();

	// Layer 1
	this.idleChar = new lib.jakechairidle();
	this.idleChar.setTransform(119,436.6,1,1,0,0,0,119,257.6);

	this.addChild(this.idleChar);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-4.7,274.1,247.8,324.9);


// symbols:
(lib.mcjakechairidleblink = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AgIgRQgFAPADAIQAEAOAJgCQAMgDgEgWQgBgEgBgE");
	this.shape.setTransform(15.1,7.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("ABCgJQgEgQgLADQgCAFgCAGAhAgIQAAACgBAEQAAACAAACQAAAJADAGQACAHAEAAQADAAADgHQACgGAAgJQAAgCAAgCQAAgEgBgCQgBgCAAgCQgDgGgDAAQgEAAgCAGQgBACgBACg");
	this.shape_1.setTransform(9.5,7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#35301C").ss(1,1,1).p("ABuAOQgogNgVgBQgRgDgOAHAhsAGQATgQAagD");
	this.shape_2.setTransform(10.7,1.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#267D31").s().p("AArAMQgDgKAFgNIAFgLQAKgDAEAQIACAIQAEAWgLACIgEABQgIAAgEgMgAhAARQgCgGAAgJIAAgEIABgGIABgEQADgGADAAQAEAAACAGIACAEIABAGIAAAEQAAAJgDAGQgCAHgEAAQgDAAgDgHg");
	this.shape_3.setTransform(9.6,7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("AApACIAvAAAhXgBIAiAB");
	this.shape_4.setTransform(10.3,8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#35301C").ss(1,1,1).p("ABkAMQgUgJgWgDQgRgCgOAHAhjAHQATgQAagC");
	this.shape_5.setTransform(10.1,1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4}]},42).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.3,0.2,22,9.3);


(lib.glaptop = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AFTmIIABAAIAAAAAFTmIIs+gIAoImDINQABAlDGHIjFsKAIJGRIjBsT");
	this.shape.setTransform(52.2,40.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("ADCmIIAAAAIgBAAADCmIIAAAAAC2mCIALgGAp9mQIgdANAF+F5IANAQIAUgIIAAAAID8grIAAgPQiMAUiRAegAGLGJIgUAIItJAAIgDgKADCmIIC8MB");
	this.shape_1.setTransform(66.8,40.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F7F7F7").s().p("AF3GRIjBsTIDBMTItJAAIgDgKIjFsKINQABItQgBIAdgNIM+AIIgLAGIALgGIABAAIC8MBQCRgeCMgUIAAAPIj7ArIAAAAIgVAIIgNgQIANAQIgUAIg");
	this.shape_2.setTransform(66.8,40.4);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0.2,133.5,80.4);


(lib.gdesk = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("APHsIIAACuIAAVEIAAAZAP0iiIAApmAKbnpIAAkYAKci/IgBigIAAiKAKbh6IAANWIAAAtAP0MAIAAgWIAAuMAvzMJIAAgDIAAgqIAAwZAvzsBIAAHEAvzMGIAxgZIAAgR");
	this.shape.setTransform(132.9,89.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AQBs+IgOgEMgiGAAAQgRAAgNASQgMASAAAaQAAAKACAKQADAMAHALQANASARAAIA7AAIDXAAIaOAAIDXAAIAPAAQAFAAAEgCQAFgBADgDAQarwQACgKAAgKQAAgagMgSQgHgJgIgFQgCgBgDgBQgEgCgFAAAQarwQgDAMgHALQgGAHgGAFIA1AAIAtAAIAtAAIAUAAQAKgFAGgFQAVgUgogeIijg1APklJIAAl+AMOiEIgBBEAMNNDIDXAAIAAyMASTk6IAAmTASTk6IAARxIgrADIgCAAARmMkIgtAAAQ5M9IhQAGAxYjcQAAClAACjIAAJ8IAABbIDXAAAxYjcQAAj1AAj2AtQMWIgxAAAxYBsQgTEzATFJAtQMWIZdAA");
	this.shape_1.setTransform(121.5,83.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7B5F5B").s().p("AQ8hyIAAiuIAACuQhMAQgJDFIAAl8IAAF8Qgsj8hIgkQgtBfgZB1QgMgMgRgMIAAkYIAAEYQgVgRgcgTQi+h+qThFQqUhFh4HWIAAnCIAAHCQgLlGhUhHQhhC4gXD8IAAnpIDXAAIaOAAIDXAAIAOAAQAFgBAFgBIAIgFIgIAFQgFABgFABIgOAAIjXAAI6OAAIjXAAIg7AAQgRgBgNgSQgHgKgDgNMAjVAAAQgDANgIAKQgFAIgGAEIA1AAIAtAAIAtAAIgtAAIgtAAIg1AAQAGgEAFgIQAIgKADgNICcAZQgFAGgKAEIgUAAIAAGSQglAwgICiIAApkIAAJkQgNkWggiggAMQCHIAMgEQgKBOgCBWgAt+CpgAPnBjg");
	this.shape_2.setTransform(121.2,40.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8F827F").s().p("APkNDIAAyMIAASMIjXAAIAAgtIAAtWIABhEQAChXAJhOIgMAFIAAiKIAACKIABCgIgBBEIAANWI5dAAIgxAAIAAwZQB4nYKVBGQKSBFC+B+QAcATAVARQARAOAMAMQAZh3AthgQBIAlAsD9QAJjGBMgRQAgCiANEWQAJihAkgxIAARxIgrADIgCAAIAAgWIgtAAIAA1EIAAVEIAAAZIhQAGgARmMkIAAuMgAxYNDIAAhbQgTlJATkzQgNivANiZIAAFIIAAJ8IAAp8IAAlIQAXj9Bhi5QBUBHALFIIAAQZIAAAqIAAADgAuBMWIAxAAIAAARIgxAZgAuBMWgAMOiEgAQarwQACgKAAgKQAAgagMgSQgHgJgIgFICjA1QAoAegVAUgAy7rwQgCgKAAgKQAAgaAMgSQANgSARAAMAiGAAAIAOAEQAIAFAHAJQAMASAAAaQAAAKgCAKgAQBs+g");
	this.shape_3.setTransform(121.5,83.5);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,243,167.1);


(lib.gchair = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AlxhSQDhnGiCmdQA1hQBUgPQF8hKGOBlQA4gBAlBMQkTIIDdFUAKwhGQAAAAAAAAQAAAAAAAAQAiAmgjArIAAM1IgqAtIg3AAIAAscIiMBmIAANaIgoAkIhkAAIAAthIpvAAIAAJ8IgZAhIg3gBIAAqcIjNAAIAAMvIgoAyIhVAAIAAthQgTgcATgbQAUgGAUgHQCTg1CiihIAAAAIAAAAArTCdQAUADAUACQIgBMIlhbQC9guBZirArTDUIBVAAIAoAAAmJDUIA3AAIAZAAAJOBRIA3gnIAqgfAGaCTQAZAggZAhIAogdAGaDUIhkAAAp+DUIAANhAlSDUIAAKdAKFAqIAANDAGaDUIAANh");
	this.shape.setTransform(73.4,110.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AoSAFIAAAAQADgFACgEAINgEQADAEADAFIwlAA");
	this.shape_1.setTransform(89,102.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#663300").s().p("AFIIUIAAtfIBlAAIAogdIAANZIgoAjIAAtfIAANfgArBIUIAAtfIBVAAIAoAAIAAMuIgoAxIAAtfIAANfgAlAFQgAl3FQIAAqbIA3AAIAZAAIAAJ7IgZAgIAAqbIAAKbgAKYFMgAJhFMIAAsZIA3goIAqgeIAAMyIgqAtIAAtBIAANBg");
	this.shape_2.setTransform(71.6,165.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#15212D").s().p("AE2KEIpvAAIgZAAIg3AAIjNAAIgoAAIhVAAQgTgbATgcQAUgFAUgHQCTg2CiiiIAAAAIAAAAIAAAAIAFgMIQZAAIAHAMIABAAQhZCsi9AuIgKACIgMACQkiAukfAAIAAAAIAAAAQjxAAjwggIgNgCIgogGIAoAGIANACQDwAgDxAAIAAAAIAAAAQEfAAEiguIAMgCIAKgCQC9guBZisIAAAAQAiAmgjAtIgqAeIg3AoIiMBlIgoAdQAMgQAAgQQAAgRgMgQQAMAQAAARQAAAQgMAQgAKvFpIwlAAgAlxFdQDhnFiCmcQA1hRBUgPQF8hKGOBlQA4gBAlBNQkTIGDdFUg");
	this.shape_3.setTransform(73.4,67.4);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,3,146.9,215.4);


(lib.jakechairidle = function() {
	this.initialize();

	// desk
	this.instance = new lib.gdesk("synched",0);
	this.instance.setTransform(121.5,336.5,1,1,0,0,0,121.5,83.5);

	// laptop
	this.instance_1 = new lib.glaptop("synched",0);
	this.instance_1.setTransform(71.6,216.3,0.993,1.031,0,14,1.7,66.8,40.2);

	// jake
	this.instance_2 = new lib.mcjakechairidleblink();
	this.instance_2.setTransform(142,133.7,1,1,0,0,0,10.1,4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#35301C").ss(1,1,1,3,true).p("AjoCLQABAAABABAh7hcQgBARgEARQgBACgBABADnkKQAEAWgEAYQAAAAAAAAAClD7QACADACADQAEAFAEAFAClD7QgFgGgFgH");
	this.shape.setTransform(146.3,228.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("ACGn8IA/AHQAcAPA0AyQgFACgFADQgGADAJABQAZATA9BAQBXBcA0BTQBSCGAUBeQAIAmAHAeQAHAdAGAVQgNAHgPAHQAIApAMDAIgyAAIjCAAQAAACgBADACAkBQAqg2AZgfQAageARgaQAQgaAQgDAAYmJIgBAAQABAAAAABQAAgBAAAAgACLnmIACACIABABQAEAGAFAFQAagQAUgNACXnYQgBABAAAAQg0AghKAuIAPARQACADADADIAAAAQAAAAABABQAIAIAMALQAmAnAWAxQABACAAACQABAAABABQgBAAAAAAQAAAAgBgBAB5n4IANgEAAql0QABABABABAAjlxQAPAkAKAmQABACAAACQAGAXAFAZIgBAAIgfAJQhXAAgygXQgBAAAAgBQAAAAAAgBQADgdACgWQgSAHgdAiQgTAWgKANQAAABgLgKQAGAPgCAEQADAUADAVQAIBFgCBMQgFAPgMBTQgEAYgDAWQgMBMgLA3QAAABgBABQgCAKgBAJQgNA9gLAeQgPArgOAgICoAAIBwAAIACAAIgCgCQAAgFABgGQADgPAIgYQATg0AIgeQAHgbAHgfQAFgdAFggQAAgCAAgCQAGgwAEg1IAAAAQACggABgiQABgWAAgZQABgNAAgNQAAgKgBgLQgCg+gNhNQgBgFgBgFAAYmIQAGALAFAMAAYmIQAGAHAMANAhZmVQACAKAAAMQAAALgGA8QAAABAAABAhhmoQAFAJADAKQgYAZgtAOQglALgPAKAhlmtQACADACACAjSlZQAOAnAQA/IAAAAQAAABAAABQABAEABAEQABAFABAEAjSlZQgFAigNAlIAAABQgGAUgJAVQgNAdgJAQIAAAAQgFAJgEAEQAHgEAGgEQAygiAbgYQACgCACgBAjkkRQgPAPgNAOQgSAUgPAUQg5BKgUBOQgLArgGA9QgDAjgFBNIAAAdQAAAFAAAGQABAPABAUQABAWABAdQAAAFABAFQAEAFAIAGAkIBPQAJg1AGg6IgCgyAkQB0QAEgSAEgTAkQB0QgQBNgYA+IgBAAQgDAKgFAMAl0E4QADACACACQAEACADABQAMAGAHACQAMgdAIgVAl0GoQAKgpAOgnQAEgJADgIAmCEsQgDgEgBgEQAAgBgBAAQAAAAAAgBQgFgPhzBUQg3Aog6AhICcgFIBggDAkMGoQgGANgFAMQgKAVgKAnAkMGoIhoAAQgDAQgEARAEsA5QAHAWAGAVQAPAyAKAuIAAAAQANAJARAIQANAHAQAGQAlANAVAAQBBgRAtgRQARgHAPgHAEsA5QgNgmgPgmQgIgVgnhXAFwDVQAIAjAEBDQADA2gKA3IleAAAAOGoIAJAAAAOGoIAGAI");
	this.shape_1.setTransform(160.5,211.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("AjlAeQgcglgLgwQgLguADgwQABgiALgfQAIgZASgUQAJgKAOgDQAmg9BFgVQAUgHAUgHQAcgHAcAAQBUABBPAhQAPAHAOAIQAcARAUAXQAWAZAMAeQARAtgCAxQAAAVgBAVQgBAbgEAaQgIA4gYA0QgKAVgIAWQgPAsgLAsQgEARAAASQABAXAFAYQAAABAAACQACAIAAAJIADACACaB9QANguARgtQACgIABgIQACgLADgJQAGgXgFgVQgDgLgKgEQgPAEgLANQgXAfgUAdIg0gaIgDgCIgagOIAUAaQgpgNgigdAghggQgkgRghgVQgmgZgggeQgIgGgHgHQgWAlgLAqQgGAYgDAZAjlgJQgBASABAVQAAAggFAfQgHAyAJAuQAJAvAZArQAVAjAbAeQANAOARAKQAXANAbgJQARgFAPgJQAEgCADgDQANgHAMgIQAGgFAGgEACZB7QAAAAAAAAIABACACZB7QgBADAAAEQgBAAAAABIADgGACcCgQACgPgDgOQAAgDgBgDACSCdQgIAegQAcQgQAegZAXQgjAjgoAaACnEQIABgkIgdAVQAMgvAFgyADHErIgPgRIgRAIIAAgSACSCdQADgNACgNAjkjIQAMAZARAVQAGAIAGAIIAEgGAjlgJIAAgBAh3CxQgagBgVgMQgOgJAJgPQAJgPAOgYQANgXABgyAAegaIgFgEAghggIgSgjQANAOANALAgIDXQgnAHgmAHQgqAGgpAH");
	this.shape_2.setTransform(154.2,132.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#284360").s().p("AgkEwIAQgSQAVgaAVgbIAAAAIABgBIgIgGQgegbgjgZQgagRgdgKQgRgGgTgCIgKgBIADgTIABgCQALg2AMhLIAHguQANhUAEgQQADhMgJhFQASAxACAoQADAtgEAtQgCAZgGAZIgBAEIAAADQAFAWATAIQAQgEARABQAnABAsgDQAngDBCgHQgLABAGhDIAIAAIgDBCIAAAAQgDA0gHAvIAAAFQgFAfgFAdQgGAfgIAcQgIAdgTA0QgIAYgDAPIgBALIAAACg");
	this.shape_3.setTransform(154.1,223.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FDF9E8").s().p("AgPAHIAIgFIAXgNIgBABIgaAWIgEgFg");
	this.shape_4.setTransform(151.9,167.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3A5F87").s().p("AiyFvQANgfAQgrQALgfAMg8IAKABQATACARAGQAdAKAaARQAiAYAgAcIAHAGIAAAAIAAAAQgVAcgXAZIgPASgAhHgDIABgEIABgDQAFgaADgZQAEgsgDguQgCgogTgwIgGgpQADgEgHgPIAMAJIAcgjQAdgiASgIIgFA0IAAABIACAAQAvAYBZAAIAfgJIADAJQAOBOACA+IAAAVIAAAaIgBAwIgIAAQgGBCALgCQhCAIgoADQgsADgmgBQgRgBgRAEQgSgJgGgTgACvAJIAAAAIAAABg");
	this.shape_5.setTransform(151.5,217.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B9A77B").s().p("Ai3DZQgBARgFARIgBAEIAHgmgACrBAIAAgVQAEAWgEAYIAAABIAAgagAi3gxIAAAAIAAAAIgZgRQAPgTASgUIAdgeQgHAUgJAVQgMAegJAPIADAFIgMAIQAEgEAFgJgADQh3IABAAIgBABIAAgBgABpj+IATAVIgIADIgLgYg");
	this.shape_6.setTransform(152.4,197.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#968150").s().p("AhlGOIgKgNIAKANIgJAAIgCgCIABgLQADgOAIgYQATg1AIgdQAIgcAGgfIAoAlQAgAjAhAjQAIAJAJAGQAFADAYAKQAZAKAigXQAigXgOg9QgPg9AGgZQAJgqAQgpQAPAyAKAtIAAAAQANAKARAIQgRgIgNgKIAAAAQgKgtgPgyIgNgrQAbAiAfAgQAiAjAsAXQAUAKAVAHIAIACQAHABAcgDQAdgDAZgKQAZgJANgyIANAyIgcAPIggANQgtARhBARQgVAAglgNQgQgGgNgGQAIAjAEBDQAEA2gLA2gAnxGOQAJgpAOgmIAIgSIATgxIgTAxQgIgBgMgGIgGgEIgGgDQAKgHAGgMIALgXIAIgQIAdg5QAUgoARgpQgRBNgYA+IAAAAIgJAWIAQADQAKAcATAXQADAEAEgCQAGgBADgFQAIgLAGgNQAQghATghIAAACIgEASQgNA9gKAeQgQAsgNAfgAmGjVQAJgPAMgeQAJgVAHgUIAAAAQAMgmAFgiQAOAoAQA/IgEACQgbAZgyAhgAg/k9IgBgEQgKgmgPgjIAHgDIADACIAUAUQAnAnAUAxIgCABQgggNgdgSg");
	this.shape_7.setTransform(173.1,214.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhuBJIAAAAIABACIgEABIADgDgABxg2IgEgEIAFAGIgBgCgABehLIAAAAIABABIgBgBg");
	this.shape_8.setTransform(153.5,179.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D3BFA5").s().p("AoeIGIAsguQAcgfAkgSQAMAGAHACIgHARQgOAngJApIhgADgAHtIQIgChLIAAhGIAAhKIAggOQAIApAMDAgAinjQIAGhHQABgMgDgKQgDgKgFgIIAcgZIAAAAIAPgKIgDgCQAbgdAagfQAVgYASgaQAQgWAMgXIAIgTIAMAFQgIAegNAcQgRAdgYAYQgjAigoAaQAogaAjgiQAYgYARgdQANgcAIgeIALACQgGAzgLAvIAcgVIgBAkIgJAAQgOAqgeAgQgSASgTAQIgZAVQgbAVgZAXQgJAIgVAXIAAgCg");
	this.shape_9.setTransform(167.9,201.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D2C58E").s().p("ABsG0QgYgKgFgDQgKgGgIgJQgggjghgjIgnglQAFgcAFggIAAgFQAGgvAEg1IABgBIgBAAIADhCIABgwIAAgBQAEgWgEgWQgCg+gNhOIgCgKQgFgYgGgYQAcASAfANIADgBIABAEIgBgEQgUgxgmgnIgVgUIAAgBIAAAAIgFgGIgQgRIB9hNIABgBIAugdQAcAPA0AxIgKAFQgGAEAIABQAaASA9BBQBXBcAzBSQBTCEAUBgIAPBEQgNAygZAJQgZAKgdADQgcADgHgBIgIgCQgVgHgUgKQgsgXgjgjQgegggbgiIANArQgRApgJAqQgFAZAOA9QAPA9gjAXQgXAQgTAAQgJAAgHgDgACiAwQAPApANAmQgNgmgPgpQgIgVgohUQAoBUAIAVgAARi7IABgBQAqg2AZgeQAageARgaQAQgaAPgDQgPADgQAaQgRAagaAeQgZAegqA2IgCAAIABABgAmCGRQgUgXgKgcIgPgDIAIgWIABAAQAYg+AQhNIACgEQAEgRACgRQAJg0AHg8IgDgwIADAwQgHA8gJA0IgIAmQgQApgUAoIgdA5IgIAQIgLAXQgGAMgKAHIgBgBQgJgGgEgGIgBgJIgCg0IgCgiIAAgLIAAgdIAJhxQAFg+ALgrQAUhMA5hLIAYARQgFAJgDAEIAMgIQAyghAbgZIAEgBIACAJIACAJIAGAoQAIBFgCBKQgFAQgMBVIgHAuQgMBMgLA3QgTAhgQAhQgGANgIALQgDAFgGABIgDABQgCAAgCgDgAkjitIAAAAQgPg/gOgoIAAAAQAPgJAmgMQAsgOAYgZQACALAAAMIgGBGIAAACQgSAIgdAhIgdAkIAAAAIgMgJgAAgmdIgBgBIgCgCIgCgCIgDgRIAAgDIA/AHIguAdQgFgGgEgFgABXmvg");
	this.shape_10.setTransform(171.5,204.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EDE4D8").s().p("AgJAMIAEgMQAEgKAFgGIAGABIgBAGIgBACIgFAYg");
	this.shape_11.setTransform(168.5,146.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FEEED6").s().p("AniJfQBzhUAFAPIAAABIABABIAEAIQAEAFAIAGIACABIAFAEIAHADQgkASgdAfIgrAuIAAANIicAFQA6ghA3gogAGZIzQgFhDgIgjQAOAHAQAGQAkANAVAAQBBgRAugSIgBBLIABBGIACBKIjCABQAKg3gDg2gAhEgJIgBgCIAFgzQAUgXAKgIQAZgXAYgVIAagVQATgQASgSQAgggANgqIAKAAIAAASIARgIIAPAQIADACIACACIABABIAHAMIh+BOIAAAAIABABIALAXQAPAkAKAmIABAEQAGAXAFAXIgBAAIggAJQhXAAgxgVgAiaiqQgRgKgNgOQgbgfgVgjQgZgqgJgvQgJgvAHgxQAFggAAgfQgBgVABgUIAHAAIgHgBQADgZAGgYQALgqAWgmIAPAOQAgAeAmAYQAhAWAkARIAIgKQAkAdAnAPIAJgMIA0AcQAUggAXgeQALgOAPgEQAKAFADAKQAFAWgGAWIgFAXQgBAIgCAHQgRAugNAtIgBgCIAAABIgGgBQgHAFgEAMIgEANIgJATQgMAXgPAWQgTAagUAYQgYAfgcAcIADADIgOAJIgZAQIgHAEQgPAJgRAGQgLADgLAAQgPAAgNgHgAh3k1IhTAMIBTgMIBNgPIhNAPgAjIl2QAVAMAaABQgagBgVgMQgIgGAAgHQAAgFADgGIAXgnQANgYABgxQgBAxgNAYIgXAnQgDAGAAAFQAAAHAIAGg");
	this.shape_12.setTransform(157.6,186.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#282415").s().p("AC4FBIANgEIgNAEIgRAIIAAgSIABgkIgdAVQAMgvAFgzQACgPgDgOIgBgGQANgtARguQACgHABgIIAFgXQAGgWgFgUQgDgKgKgFQgPAEgLAOQgXAcgUAgIg0gcIgDgCIgagOIAUAcQgpgPgigbQgNgLgNgOIASAhQgkgPghgWQgmgYgggeIgPgOIAEgFIgEAFIgMgPQgRgWgMgYQAMAYARAWIAMAPQgWAmgLAqQgGAWgDAZIAAABQgBAUABAVQgcgngLguQgLgvADgwQABgiALgfQAIgYASgUQAJgLAOgCQAmg+BFgVIAogNQAcgIAcABQBUABBPAhQAPAGAOAJQAcAQAUAYQAWAYAMAfQARAtgCAxIgBApQgBAcgEAZQgIA4gYA0QgKAVgIAXQgPArgLAtQgEAQAAASQABAYAFAXIAAADIACARgAAeALIgFgFgAi7hkIAAAAg");
	this.shape_13.setTransform(154.2,128.9);

	// chair
	this.instance_3 = new lib.gchair("synched",0);
	this.instance_3.setTransform(148,306.4,1,1,0,0,0,73.4,110.7);

	this.addChild(this.instance_3,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-4.7,95.1,247.8,324.9);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;