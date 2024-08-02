=ARRAYFORMULA(
    IF(ISBLANK(A2:A); "";
        IF(I2:I = 0; "";
            TEXT(I2:I;"dd")
        )
    )
)

=ARRAYFORMULA(
    IF(ISBLANK(A2:A); "";
        IF(I2:I = 0; "";
            TEXT(I2:I;"mm")
        )
    )
)

=ARRAYFORMULA(
    IF(ISBLANK(A2:A); "";
        IF(I2:I = 0; "";
            TEXT(I2:I;"yyyy")
        )
    )
)
