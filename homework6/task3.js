function divide(numerator, denominator) {
if (typeof numerator !== 'number' || typeof denominator !== 'number') 
{
throw new Error('Both arguments should be numbers');
}
if (denominator === 0) {
throw new Error('Cannot be divided by 0');
}
return numerator / denominator;
}
  try {
    console.log(divide(20, 5));  
  } catch (error) {
    console.log('Error:', e.message);
  } finally {
    console.log('Process finished');
  }
  try {
    console.log(divide(5, 0));   
  } catch (e) {
    console.log('Error', e.message);
  } finally {
    console.log('Process finished');
  }
  try {
    console.log(divide('test', 2));
  } catch (e) {
    console.log('Error:', e.message);
  } finally {
    console.log('Process finished');
  }