Replicar Fórmulas contendo FILTER usando ARRAYFORMULA

=ARRAYFORMULA(
    IF(ISBLANK($A$2:$A);"";
        BYROW($V$2:$V;
            LAMBDA(row;
                IF(
                    COUNTIFS(TBL_VINCULOS!$A$2:$A; row; TBL_VINCULOS!$B$2:$B; "") >= 1;"";
                    FILTER(TBL_VINCULOS!$B$2:$B; TBL_VINCULOS!$A$2:$A = row)
                )
            )  
        )
    )
)

=ARRAYFORMULA(
    IF(ISBLANK(A2:A); "";
        BYROW(K2:K;
            LAMBDA(row; 
                IF(
                    COUNTIFS(TBL_TIPO_REQUISICAO!$A$2:$A; row; TBL_TIPO_REQUISICAO!$D$2:$D; "")>=1; ""; 
                    FILTER(TBL_TIPO_REQUISICAO!$D$2:$D; TBL_TIPO_REQUISICAO!$A$2:$A = row)
                )
            )
        )
    )
)
