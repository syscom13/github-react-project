import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { ThemeProvider } from './contexts/theme'
import Nav from './components/Nav'
import NotFound from './components/NotFound'
import Loading from './components/Loading'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const Popular = React.lazy(() => import('./components/Popular'))
const Battle = React.lazy(() => import('./components/Battle'))
const Results = React.lazy(() => import('./components/Results'))

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      theme: 'light',
      toggleTheme: () => {
        this.setState(prevState => {
          return {
            theme: prevState.theme === 'light' ? 'dark' : 'light'
          }
        })
      }
    }
  }

  render() {
    return (
      <Router>
        <div className={this.state.theme}>
          <div className="container">
            <ThemeProvider value={this.state}>
              <Nav />
                <React.Suspense fallback={<Loading />}>
                  <Switch>
                      <Route exact path="/" component={Popular} />
                      <Route exact path="/battle" component={Battle} />
                      <Route path="/battle/results" component={Results} />
                      <Route component={NotFound} />
                  </Switch>
                </React.Suspense>
            </ThemeProvider>
          </div>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
