export default function(){
  return(
    <section id="user-input">
      <div id="input-group">
        <p>
          <label htmlFor="">Initial Investment</label>
          <input type="number" required/>
        </p>
        <p>
          <label htmlFor="">Annual Investment</label>
          <input type="number" required/>
        </p>
      </div>
      <div id="input-group">
        <p>
          <label htmlFor="">Expected Return</label>
          <input type="number" required/>
        </p>
        <p>
          <label htmlFor="">Duration</label>
          <input type="number" required/>
        </p>
      </div>
    </section>
  );
}