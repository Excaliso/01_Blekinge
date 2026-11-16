

Write-Host "Applying kubernetes.yml" 
kubectl apply -f kubernetes.yml

Start-Sleep -Seconds 10

Write-Host "Deploying NGINX Ingress Controller" 
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/main/deploy/static/provider/kind/deploy.yaml

Start-Sleep -Seconds 20

Write-Host "`nDeployment Complete! Testing endpoints..." 
curl.exe http://localhost/