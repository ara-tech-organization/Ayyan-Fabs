$base = "https://snow-marten-961700.hostingersite.com/"
$dest = "c:\Users\karth\OneDrive\Documents\Ara\Ayyan Fabs\public\projects"
$headers = @{ "User-Agent" = "Mozilla/5.0"; "Referer" = "https://snow-marten-961700.hostingersite.com/" }

$images = @(
  "images/residential-projects/rp-1.jpeg","images/residential-projects/rp-2.jpeg","images/residential-projects/rp-3.jpeg",
  "images/residential-projects/rp-4.jpeg","images/residential-projects/rp-5.jpeg","images/residential-projects/rp-6.jpeg",
  "images/residential-projects/rp-7.jpeg","images/residential-projects/rp-8.jpeg","images/residential-projects/rp-9.jpeg",
  "images/residential-projects/rp-10.jpeg","images/residential-projects/rp-11.jpeg","images/residential-projects/rp-12.jpeg",
  "images/residential-projects/rp-13.jpeg","images/residential-projects/rp-14.jpeg","images/residential-projects/rp-15.jpeg",
  "images/residential-projects/rp-16.jpeg","images/residential-projects/rp-17.jpeg","images/residential-projects/rp-18.jpeg",
  "images/assetz-27-park-avenue/pa-1.webp",
  "images/ramanashree/ram-1.jpg",
  "images/vibgyor/v-1.jpg","images/vibgyor/v-2.jpg",
  "images/assetz-lumos/al-1.webp",
  "images/assetz-marq/am-1.png","images/assetz-marq/am-2.png","images/assetz-marq/am-3.png","images/assetz-marq/am-4.png",
  "images/assetz-marq/am-5.png","images/assetz-marq/am-6.png","images/assetz-marq/am-7.png","images/assetz-marq/am-8.jpg",
  "images/assetz-marq/am-9.jpg","images/assetz-marq/am-10.png","images/assetz-marq/am-11.png","images/assetz-marq/am-12.jpg",
  "images/assetz-marq/am-13.png","images/assetz-marq/am-14.png","images/assetz-marq/am-15.png","images/assetz-marq/am-16.png",
  "images/assetz-marq/am-17.png","images/assetz-marq/am-18.png","images/assetz-marq/am-19.png","images/assetz-marq/am-20.png",
  "images/assetz-marq/am-21.png","images/assetz-marq/am-22.png","images/assetz-marq/am-23.jpeg","images/assetz-marq/am-24.jpeg",
  "images/assetz-marq/am-25.jpg","images/assetz-marq/am-26.png","images/assetz-marq/am-27.png","images/assetz-marq/am-28.png",
  "images/assetz-marq/am-29.png","images/assetz-marq/am-30.png","images/assetz-marq/am-31.jpg","images/assetz-marq/am-32.jpg",
  "images/assetz-marq/am-33.png","images/assetz-marq/am-34.png","images/assetz-marq/am-35.png","images/assetz-marq/am-36.png",
  "images/assetz-marq/am-37.png","images/assetz-marq/am-38.png","images/assetz-marq/am-39.png","images/assetz-marq/am-40.png",
  "images/assetz-marq/am-41.png","images/assetz-marq/am-42.png","images/assetz-marq/am-43.png","images/assetz-marq/am-44.png",
  "images/assetz-marq/am-45.png","images/assetz-marq/am-46.png",
  "images/assetz-canvas-cove/cc-1.jpg","images/assetz-canvas-cove/cc-2.jpg","images/assetz-canvas-cove/cc-3.jpg",
  "images/earth-essence/ee-2.png","images/earth-essence/ee-3.png","images/earth-essence/ee-4.png","images/earth-essence/ee-5.png",
  "images/earth-essence/ee-6.png","images/earth-essence/ee-7.png","images/earth-essence/ee-8.png","images/earth-essence/ee-9.png",
  "images/orchids-school/orchids-1.jpg",
  "images/corporate-office/co-1.jpg",
  "images/biryani-zone/bz-1.jpg",
  "images/63-degree/63-1.jpg",
  "images/soul-soil/ss-1.jpeg","images/soul-soil/ss-2.jpeg","images/soul-soil/ss-3.jpeg","images/soul-soil/ss-4.jpeg",
  "images/soul-soil/ss-5.jpeg","images/soul-soil/ss-6.jpeg","images/soul-soil/ss-7.jpeg","images/soul-soil/ss-9.jpeg",
  "images/soul-soil/ss-10.jpeg","images/soul-soil/ss-11.jpeg","images/soul-soil/ss-12.jpeg","images/soul-soil/ss-13.jpeg",
  "images/soul-soil/ss-14.png","images/soul-soil/ss-15.png","images/soul-soil/ss-16.png","images/soul-soil/ss-17.png",
  "images/soul-soil/ss-18.jpeg","images/soul-soil/ss-19.png","images/soul-soil/ss-20.png","images/soul-soil/ss-21.jpeg",
  "images/assetz-18-oak/ao-1.webp",
  "images/sun-sanctum/ss-1.jpg","images/sun-sanctum/ss-2.jpg","images/sun-sanctum/ss-3.jpg",
  "images/sun-sanctum/ss-4.jpg","images/sun-sanctum/ss-5.jpg","images/sun-sanctum/ss-6.jpg",
  "images/brigade-ramaiah-hospital/brh-1.jpg","images/brigade-ramaiah-hospital/brh-2.avif",
  "images/brigade-ramaiah-hospital/brh-3.avif","images/brigade-ramaiah-hospital/brh-4.webp",
  "images/brigade-pavillion-villas/bpv-1.png","images/brigade-pavillion-villas/bpv-2.jpg","images/brigade-pavillion-villas/bpv-3.jpg",
  "images/la-palmera/lp-1.png","images/la-palmera/lp-2.png","images/la-palmera/lp-3.png","images/la-palmera/lp-4.png",
  "images/la-palmera/lp-5.png","images/la-palmera/lp-6.png","images/la-palmera/lp-7.png","images/la-palmera/lp-8.png",
  "images/la-palmera/lp-9.png","images/la-palmera/lp-10.png","images/la-palmera/lp-11.png","images/la-palmera/lp-12.png",
  "images/la-palmera/lp-15.jpeg","images/la-palmera/lp-16.png","images/la-palmera/lp-17.png","images/la-palmera/lp-18.png",
  "images/la-palmera/lp-19.png","images/la-palmera/lp-20.jpeg","images/la-palmera/lp-21.png","images/la-palmera/lp-22.png",
  "images/la-palmera/lp-23.png","images/la-palmera/lp-24.png","images/la-palmera/lp-25.png","images/la-palmera/lp-26.png",
  "images/la-palmera/lp-27.png","images/la-palmera/lp-28.png",
  "images/ascent-hosur/ah-1.webp","images/ascent-hosur/ah-2.jpg",
  "images/assetz-soho-sky/sas-1.jpg","images/assetz-soho-sky/sas-2.jpg",
  "images/godrej-24/g24-1.jpg",
  "images/assetz-38-banyan/ab-1.jpg","images/assetz-38-banyan/ab-2.jpg",
  "images/national-public-school/nps-1.jpg","images/national-public-school/nps-2.jpg",
  "images/bloom-hotel/bloom-1.jpg",
  "images/brigade-atmosphere/ba-1.png",
  "images/brigade-orchards-banyan/bob-1.jpg",
  "images/godrej-avenue/ga-2.jpeg","images/godrej-avenue/ga-3.jpeg","images/godrej-avenue/ga-4.jpeg",
  "images/godrej-avenue/ga-5.jpeg","images/godrej-avenue/ga-6.png",
  "images/assetz-avathi/aa-1.jpg",
  "images/lw-construction/lw-1.jpg",
  "images/ren-rei/banner-mob.webp","images/ren-rei/download.jpg",
  "images/brigade-goldspire/bg-1.jpg",
  "images/casagrand-aquene/caq-1.jpg","images/casagrand-aquene/caq-2.jpg",
  "images/mahindra-eden/me-1.jpg","images/mahindra-eden/me-2.jpg","images/mahindra-eden/me-3.jpg",
  "images/mahindra-eden/me-4.jpg","images/mahindra-eden/me-5.jpg",
  "images/lodha-mirabelle/lm-1.jpg","images/lodha-mirabelle/lm-2.jpg","images/lodha-mirabelle/lm-3.jpg","images/lodha-mirabelle/lm-4.jpg",
  "images/godrej-ananda/b751226e-7973-43bd-a2ff-6a73f9fb9b8d.jpg",
  "images/godrej-ananda/078e10a2-468c-4dae-8e69-3cae8c80c690.jpg",
  "images/godrej-ananda/08cbebaf-55d7-4c8c-a5b4-35ff04ed21bd.jpg",
  "images/godrej-ananda/2573a076-7a69-4611-bde6-0fb63b84acac.jpg",
  "images/godrej-ananda/3a3f3ebe-7c29-4ff7-b637-345bd39ad183.jpg",
  "images/godrej-ananda/625c50ec-71d2-4acb-acc8-be4752374a24.jpg",
  "images/godrej-ananda/69bef2a8-9b65-4d8f-8541-5791d1245b1d.jpg",
  "images/godrej-ananda/6c3967c5-90d9-452a-b98a-93cef6d53706.jpg",
  "images/godrej-ananda/7ecf21a7-e0fe-486a-8ab5-eed9115010d8.jpg",
  "images/godrej-ananda/99b04e3f-7855-4d98-8877-6fc2d073db9e.jpg",
  "images/godrej-ananda/ab786670-c0b3-406e-9a4e-a770735c2940.jpg",
  "images/godrej-ananda/c5b51636-ca05-4dec-9add-3bcc9f61ed29.jpg",
  "images/godrej-ananda/ccc1d4c4-5a9b-4a7d-bd55-e9349799cb47.jpg",
  "images/godrej-ananda/f8471310-4623-498f-94ef-e35572ab0bac.jpg",
  "images/godrej-ananda/fb818bd3-5d5c-4f5e-8d44-d65aea3a14f9.jpg",
  "images/godrej-regal-pavillion/grp-1.jpg","images/godrej-regal-pavillion/grp-2.jpg","images/godrej-regal-pavillion/grp-3.jpg",
  "images/godrej-park-retreat/gpr-2.png","images/godrej-park-retreat/gpr-3.png","images/godrej-park-retreat/gpr-4.png",
  "images/godrej-park-retreat/gpr-5.png","images/godrej-park-retreat/gpr-6.png","images/godrej-park-retreat/gpr-7.png",
  "images/godrej-park-retreat/gpr-8.png","images/godrej-park-retreat/gpr-9.png","images/godrej-park-retreat/gpr-10.png",
  "images/godrej-park-retreat/gpr-11.png","images/godrej-park-retreat/gpr-12.png","images/godrej-park-retreat/gpr-13.png",
  "images/godrej-kokapet/1.png","images/godrej-kokapet/2.png","images/godrej-kokapet/3.png","images/godrej-kokapet/4.png",
  "images/godrej-kokapet/5.png","images/godrej-kokapet/6.png","images/godrej-kokapet/7.png","images/godrej-kokapet/8.png",
  "images/godrej-kokapet/9.png","images/godrej-kokapet/10.png","images/godrej-kokapet/11.png","images/godrej-kokapet/12.png",
  "images/godrej-kokapet/13.png","images/godrej-kokapet/14.png","images/godrej-kokapet/15.png","images/godrej-kokapet/16.png",
  "images/godrej-kokapet/17.png","images/godrej-kokapet/18.png","images/godrej-kokapet/19.png","images/godrej-kokapet/20.png",
  "images/godrej-kokapet/21.png","images/godrej-kokapet/22.png","images/godrej-kokapet/23.png","images/godrej-kokapet/24.png",
  "images/godrej-kokapet/25.png","images/godrej-kokapet/26.png","images/godrej-kokapet/27.png","images/godrej-kokapet/28.png",
  "images/godrej-kokapet/29.png",
  "images/godrej-woodscapes/gw-1.jpg","images/godrej-woodscapes/gw-2.jpg","images/godrej-woodscapes/gw-3.jpg",
  "images/godrej-woodscapes/gw-4.jpg","images/godrej-woodscapes/gw-5.jpg","images/godrej-woodscapes/gw-6.jpg",
  "images/godrej-woodscapes/gw-7.jpg","images/godrej-woodscapes/gw-8.jpg",
  "images/godrej-azure/ga-1.jpg",
  "images/atmos-aura/atmos-1.jpg","images/atmos-aura/atmos-2.jpg",
  "images/casagrand-flamingo/cf-1.jpg","images/casagrand-flamingo/cf-2.jpg",
  "images/casagrand-windsor/cw-1.jpg","images/casagrand-windsor/cw-2.jpg",
  "images/casagrand-attapur/ca-1.jpg",
  "images/assetz-sora-saki/ass-1.jpg",
  "images/brigade-ivory/ivory-1.jpg","images/brigade-ivory/ivory-2.jpg","images/brigade-ivory/ivory-3.jpg",
  "images/godrej-msr/gm-1.jpg","images/godrej-msr/gm-2.jpg","images/godrej-msr/gm-3.jpg","images/godrej-msr/gm-4.jpg"
)

# First: clean up any flat files that were wrongly placed in the root projects folder
Get-ChildItem $dest -File | Remove-Item -Force
Write-Host "Cleaned flat files from $dest"

$total = $images.Count
$done = 0
$failed = @()

foreach ($img in $images) {
  # Split by forward slash directly — reliable on all platforms
  $parts    = $img -split "/"
  $subfolder = $parts[1]   # e.g. "godrej-woodscapes"
  $fname     = $parts[2]   # e.g. "gw-1.jpg"

  $localDir  = Join-Path $dest $subfolder
  if (-not (Test-Path $localDir)) {
    New-Item -ItemType Directory -Path $localDir -Force | Out-Null
  }

  $localFile = Join-Path $localDir $fname
  $url = $base + $img

  try {
    Invoke-WebRequest -Uri $url -OutFile $localFile -Headers $headers -TimeoutSec 30 -ErrorAction Stop
    $done++
    if ($done % 20 -eq 0) { Write-Host "Progress: $done / $total" }
  } catch {
    $failed += $img
    Write-Host "FAILED: $img"
  }
}

Write-Host "`nDone: $done / $total"
if ($failed.Count -gt 0) {
  Write-Host "Failed ($($failed.Count)):"
  $failed | ForEach-Object { Write-Host "  $_" }
}
