lc=0
for file in $(find fortunes -type f -name "*[^.*]" | sort); do
    filename=`echo "$file" | cut -c 10-`
    nlc=$((`grep "%" "$file" | wc -l`))
    printf "{\"name\": \"$filename\",\"min\": $((lc)), \"max\": $((lc+nlc-1))},"
    lc=$((lc+nlc))
done
