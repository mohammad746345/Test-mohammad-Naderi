export default function removerRepetitive(string) {
    return string
      .split('')
      .filter(function(item, pos, self) {
        return self.indexOf(item) == pos;
      })
      .join('');
  }
  console.log(removerRepetitive('aaaaaaaaaaaabbbbbbbbbbcccccccsa'));