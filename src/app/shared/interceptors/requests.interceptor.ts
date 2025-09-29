import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../environments/environments';

export const requestsInterceptor: HttpInterceptorFn = (req, next) => {
  const newReq = req.clone({
    url: `${environment.apiUrl}${req.url}`
  })

  return next(newReq);
};
