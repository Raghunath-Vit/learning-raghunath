import React from 'react';
import MaterialUi from './MatrialUi';
import Topograph from './Topograph';
import Gridlay from './Gridlay';
import ThemedApp from './ThemedApp';
function App() {

return (
<div>
<MaterialUi/>
<Topograph/>
<Gridlay/>
<ThemedApp/>
ReactDOM.render(
<React.StrictMode>
<ThemedApp />
</React.StrictMode>,
document.getElementById('root')
);
</div>
);
}
export default App;

