export { default as merge } from 'lodash/merge';

function add(a,b){for(var i=a.length-1,j=b.length-1,carry=0,ret="";0<=i||0<=j;){var x=0,y=0,sum=void 0;0<=i&&(x=a[i]-"0",i--),0<=j&&(y=b[j]-"0",j--),sum=x+y+carry,10<=sum?(carry=1,sum-=10):carry=0,ret=sum+ret;}return carry&&(ret=carry+ret),ret}

export { add };
//# sourceMappingURL=demo.esm.js.map
