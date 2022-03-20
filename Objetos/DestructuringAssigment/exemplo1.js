let voxel = { x: 3.6, y: 7.4, z: 6.54 };

var x = voxel.x;
var y = voxel.y;
var z = voxel.z;

console.log(x); /// 3.6

//// Então

const { x: a, y: b, z: c } = voxel; /// a = 3.6, b = 7.4, c =6.54

/////////////////----------------------------------------------------------------------////////////

const TEMPERATURES = {
  today: 30.0,
  tomorrow: 32.4,
};

function getTemp(Temperatures) {
  const { tomorrow: TempoOntem } = Temperatures;
  return TempoOntem;
}

console.log(getTemp(TEMPERATURES));

///Criei o objeto temperaturas, colocando os atribuitos de ontem e hoje com suas respctivas temperaturas.
