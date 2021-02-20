export function getIconByName(name: string): string[] {
  switch (name) {
    case 'angular':
      return ['fab', 'angular'];
    case 'javascript':
      return ['fab', 'js'];
    case 'node':
      return ['fab', 'node'];
    case 'react':
      return ['fab', 'react'];
    case 'sass':
      return ['fab', 'sass'];
    case 'gitlab':
      return ['fab', 'gitlab'];
    default:
      return ['fas', 'question'];
  }
}
