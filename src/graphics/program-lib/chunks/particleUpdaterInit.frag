varying vec2 vUv0;

uniform sampler2D particleTexIN;
uniform sampler2D internalTex0;
uniform sampler2D internalTex1;
uniform sampler2D internalTex2;

uniform mat3 emitterMatrix;
uniform vec3 emitterScale;

uniform vec3 emitterPos, frameRandom, localVelocityDivMult, velocityDivMult;
uniform float delta, rate, rateDiv, lifetime, numParticles, rotSpeedDivMult, seed;
uniform float startAngle, startAngle2;
uniform float initialVelocity;

uniform float graphSampleSize;
uniform float graphNumSamples;


vec3 inPos;
float inAngle;
bool inShow;
float inLife;
float visMode;

vec3 outPos;
vec3 outVel;
float outAngle;
bool outShow;
float outLife;
