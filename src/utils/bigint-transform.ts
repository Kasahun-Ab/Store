export function transformBigInt(obj: any): any {
    if (obj === null || obj === undefined) return obj;
  
    if (typeof obj === 'bigint') return obj.toString();
  
    if (Array.isArray(obj)) return obj.map(transformBigInt);
  
    if (typeof obj === 'object') {
      return Object.fromEntries(
        Object.entries(obj).map(([key, value]) => [key, transformBigInt(value)])
      );
    }
  
    return obj;
  }
  