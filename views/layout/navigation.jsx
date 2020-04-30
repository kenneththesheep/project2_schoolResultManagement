var React = require('react');

class DefaultLayout extends React.Component {
  render() {
    return (
      <html>
        <head><title>{this.props.title}</title></head>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link active" href="/home">Home <span class="sr-only">(current)</span></a>
      <a class="nav-item nav-link" href="/formclass">Form Class</a>
      <a class="nav-item nav-link" href="/conduct">Conduct and HDP</a>
      <a class="nav-item nav-link" href="/results">Results</a>
            <a class="nav-item nav-link" href="/" id='logout'>LogOut</a>
    </div>
  </div>
</nav>
<script src = {"/script/logout.js"}></script>
      </html>

    );
  }
}

module.exports = DefaultLayout;